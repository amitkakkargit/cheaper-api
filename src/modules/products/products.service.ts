import {
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

  async confirmBought(userId: string, confirmProductDto: ConfirmProductDto) {
    const product = await this.findById(confirmProductDto.productId);

    if (product.seller.userId === userId) {
      throw new ForbiddenException('Seller cannot confirm buying own product');
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

    if (product.seller.userId !== userId) {
      throw new ForbiddenException('Only the seller can confirm this sale');
    }

    const purchase = await this.prisma.purchase.findFirst({
      where: {
        productId: product.id,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    if (!purchase) {
      throw new NotFoundException('Buyer confirmation not found');
    }

    return this.prisma.purchase.update({
      where: {
        id: purchase.id,
      },
      data: {
        sellerConfirmedAt: new Date(),
      },
      include: {
        product: true,
        buyer: true,
      },
    });
  }
}
