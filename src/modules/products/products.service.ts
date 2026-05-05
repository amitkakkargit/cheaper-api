import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';
import { ConfirmProductDto } from './dto/confirm-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductQueryDto } from './dto/product-query.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  canSellerMarkSold(product: { seller: { userId: string } }, userId: string) {
    return product.seller.userId === userId;
  }

  canBuyerMarkReceived(
    product: { seller: { userId: string } },
    userId: string,
  ) {
    return product.seller.userId !== userId;
  }

  async create(userId: string, createProductDto: CreateProductDto) {
    const seller = await this.prisma.seller.findUnique({
      where: { id: createProductDto.sellerId },
      select: { userId: true },
    });

    if (!seller) {
      throw new NotFoundException('Seller not found');
    }

    if (seller.userId !== userId) {
      throw new ForbiddenException('Only the seller owner can add products');
    }

    return this.prisma.product.create({
      data: {
        ...createProductDto,
        name: createProductDto.title,
        imageUrl: createProductDto.imageUrl ?? '',
        images: createProductDto.images ?? [],
        videoUrl: createProductDto.videoUrl ?? '',
        videoStory: createProductDto.videoStory ?? '',
      },
      include: {
        seller: true,
        reviews: true,
      },
    });
  }

  findAll(productQueryDto: ProductQueryDto) {
    return this.prisma.product.findMany({
      where: {
        sellerId: productQueryDto.sellerId,
        category: productQueryDto.category,
        location: productQueryDto.location
          ? {
              contains: productQueryDto.location,
              mode: 'insensitive',
            }
          : undefined,
        title: productQueryDto.search
          ? {
              contains: productQueryDto.search,
              mode: 'insensitive',
            }
          : undefined,
      },
      include: {
        seller: {
          include: {
            reviews: true,
          },
        },
        reviews: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: {
        seller: true,
        reviews: true,
        purchases: true,
      },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  async getTransactionStatus(productId: string, userId?: string) {
    const product = await this.findById(productId);
    const isSellerOwner = userId
      ? this.canSellerMarkSold(product, userId)
      : false;
    const viewerPurchase = userId
      ? product.purchases.find((purchase) => purchase.buyerId === userId)
      : undefined;
    const confirmedBuyer =
      product.purchases.find((purchase) => purchase.buyerConfirmedAt) ?? null;

    const buyerConfirmed = Boolean(viewerPurchase?.buyerConfirmedAt);
    const sellerMarkedSold = Boolean(product.sellerMarkedSoldAt);
    const canMarkSold = Boolean(userId && isSellerOwner && !sellerMarkedSold);
    const canMarkReceived = Boolean(
      userId && !isSellerOwner && !buyerConfirmed,
    );
    const canBuyerReviewSeller = Boolean(
      userId && !isSellerOwner && (sellerMarkedSold || buyerConfirmed),
    );
    const canSellerReviewBuyer = Boolean(
      userId && isSellerOwner && confirmedBuyer?.buyerConfirmedAt,
    );

    return {
      productId: product.id,
      isSellerOwner,
      sellerMarkedSold,
      sellerMarkedSoldAt: product.sellerMarkedSoldAt,
      buyerConfirmed,
      buyerConfirmedAt: viewerPurchase?.buyerConfirmedAt ?? null,
      buyerIdForSellerReview: isSellerOwner ? confirmedBuyer?.buyerId ?? null : null,
      canMarkSold,
      canMarkReceived,
      canBuyerReviewSeller,
      canBuyerReviewProduct: canBuyerReviewSeller,
      canSellerReviewBuyer,
      message: this.getTransactionStatusMessage({
        isSellerOwner,
        sellerMarkedSold,
        buyerConfirmed,
        canSellerReviewBuyer,
      }),
    };
  }

  getTransactionStatusMessage(status: {
    isSellerOwner: boolean;
    sellerMarkedSold: boolean;
    buyerConfirmed: boolean;
    canSellerReviewBuyer: boolean;
  }) {
    if (status.isSellerOwner) {
      if (status.buyerConfirmed || status.canSellerReviewBuyer) {
        return 'The buyer confirmed they received this product. You can now review the buyer.';
      }

      return 'Waiting for buyer to confirm they received this product before buyer review is enabled.';
    }

    if (status.sellerMarkedSold) {
      return 'The seller marked this product as sold. If you bought this item, please confirm and leave a review.';
    }

    if (status.buyerConfirmed) {
      return 'You confirmed you received this product. You can now leave a review.';
    }

    return 'Waiting for seller to mark this product as sold before reviews are enabled.';
  }

  async confirmBought(userId: string, confirmProductDto: ConfirmProductDto) {
    const product = await this.findById(confirmProductDto.productId);

    if (!this.canBuyerMarkReceived(product, userId)) {
      throw new ForbiddenException('Seller cannot confirm buying own product');
    }

    const existingPurchase = await this.prisma.purchase.findUnique({
      where: {
        productId_buyerId: {
          productId: product.id,
          buyerId: userId,
        },
      },
    });

    if (existingPurchase?.buyerConfirmedAt) {
      throw new ConflictException('Product receipt already confirmed');
    }

    return this.prisma.purchase.upsert({
      where: {
        productId_buyerId: {
          productId: product.id,
          buyerId: userId,
        },
      },
      create: {
        productId: product.id,
        buyerId: userId,
        sellerId: product.sellerId,
        buyerConfirmedAt: new Date(),
      },
      update: {
        buyerConfirmedAt: new Date(),
      },
      include: {
        product: true,
        buyer: true,
      },
    });
  }

  async confirmSold(userId: string, confirmProductDto: ConfirmProductDto) {
    const product = await this.findById(confirmProductDto.productId);

    if (!this.canSellerMarkSold(product, userId)) {
      throw new ForbiddenException('Only the seller can confirm this sale');
    }

    if (product.sellerMarkedSoldAt) {
      throw new ConflictException('Product is already marked as sold');
    }

    return this.prisma.product.update({
      where: {
        id: product.id,
      },
      data: {
        sellerMarkedSoldAt: new Date(),
      },
      include: {
        seller: true,
        purchases: true,
        reviews: true,
      },
    });
  }
}
