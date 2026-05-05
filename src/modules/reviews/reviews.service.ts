import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { Prisma } from '../../../generated/prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateProductReviewDto } from './dto/create-product-review.dto';
import { CreateSellerReviewDto } from './dto/create-seller-review.dto';

@Injectable()
export class ReviewsService {
  constructor(private readonly prisma: PrismaService) {}

  async createSellerReview(
    userId: string,
    createSellerReviewDto: CreateSellerReviewDto,
  ) {
    await this.ensureSellerCanBeReviewed(userId, createSellerReviewDto.sellerId);
    await this.ensureCompletedPurchase(
      userId,
      createSellerReviewDto.productId,
      createSellerReviewDto.sellerId,
    );

    try {
      return await this.prisma.sellerReview.create({
        data: {
          userId,
          ...createSellerReviewDto,
        },
        include: {
          user: true,
          seller: true,
        },
      });
    } catch (error) {
      this.handleUniqueReviewError(error, 'User has already reviewed this seller');
    }
  }

  findSellerReviews(sellerId: string, userId?: string) {
    return this.prisma.sellerReview.findMany({
      where: { sellerId },
      include: {
        user: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    }).then(reviews => this.filterVisibleSellerReviews(reviews, sellerId, userId));
  }

  async createProductReview(
    userId: string,
    createProductReviewDto: CreateProductReviewDto,
  ) {
    await this.ensureProductCanBeReviewed(
      userId,
      createProductReviewDto.productId,
      createProductReviewDto.sellerId,
    );
    await this.ensureCompletedPurchase(
      userId,
      createProductReviewDto.productId,
      createProductReviewDto.sellerId,
    );

    try {
      return await this.prisma.productReview.create({
        data: {
          userId,
          ...createProductReviewDto,
        },
        include: {
          user: true,
          product: true,
        },
      });
    } catch (error) {
      this.handleUniqueReviewError(error, 'User has already reviewed this product');
    }
  }

  findProductReviews(productId: string, userId?: string) {
    return this.prisma.productReview.findMany({
      where: { productId },
      include: {
        user: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    }).then(reviews => this.filterVisibleReviews(reviews, productId, userId));
  }

  private async ensureSellerCanBeReviewed(
    userId: string,
    sellerId: string,
  ): Promise<void> {
    const seller = await this.prisma.seller.findUnique({
      where: { id: sellerId },
      select: { id: true, userId: true },
    });

    if (!seller) {
      throw new NotFoundException('Seller not found');
    }

    if (seller.userId === userId) {
      throw new ForbiddenException('Seller cannot review their own profile');
    }
  }

  private async ensureProductCanBeReviewed(
    userId: string,
    productId: string,
    sellerId: string,
  ): Promise<void> {
    const product = await this.prisma.product.findUnique({
      where: { id: productId },
      select: {
        id: true,
        sellerId: true,
        seller: {
          select: {
            userId: true,
          },
        },
      },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    if (product.sellerId !== sellerId) {
      throw new ConflictException('Product does not belong to this seller');
    }

    if (product.seller.userId === userId) {
      throw new ForbiddenException('Seller cannot review their own product');
    }
  }

  private async ensureCompletedPurchase(
    userId: string,
    productId: string,
    sellerId: string,
  ): Promise<void> {
    const purchase = await this.prisma.purchase.findFirst({
      where: {
        buyerId: userId,
        productId,
        sellerId,
        buyerConfirmedAt: {
          not: null,
        },
        sellerConfirmedAt: {
          not: null,
        },
      },
      select: { id: true },
    });

    if (!purchase) {
      throw new ConflictException(
        'Buyer and seller must confirm the product handoff before review',
      );
    }
  }

  private handleUniqueReviewError(error: unknown, message: string): never {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === 'P2002'
    ) {
      throw new ConflictException(message);
    }

    throw error;
  }

  private async filterVisibleReviews(reviews: any[], productId: string, userId?: string) {
    if (!userId) {
      // For anonymous users, only show reviews where both buyer and seller have reviewed
      const productReviews = await this.prisma.productReview.findMany({
        where: { productId },
        select: { userId: true },
      });
      const sellerReviews = await this.prisma.sellerReview.findMany({
        where: { productId: { not: null } },
        select: { userId: true, productId: true },
      });

      const reviewedUserIds = new Set(productReviews.map(r => r.userId));
      const sellerReviewedUserIds = new Set(sellerReviews.filter(r => r.productId === productId).map(r => r.userId));

      return reviews.filter(review => reviewedUserIds.has(review.userId) && sellerReviewedUserIds.has(review.userId));
    }

    // For authenticated users
    const userSellerIds = await this.prisma.seller.findMany({
      where: { userId },
      select: { id: true },
    });
    const productSeller = await this.prisma.product.findUnique({
      where: { id: productId },
      select: { sellerId: true },
    });

    const isProductSeller = productSeller && userSellerIds.some(s => s.id === productSeller.sellerId);

    if (isProductSeller) {
      // Product sellers can see all buyer reviews on their product
      return reviews;
    } else {
      // Buyers can see their own reviews + reviews where both sides have reviewed
      const productReviews = await this.prisma.productReview.findMany({
        where: { productId },
        select: { userId: true },
      });
      const sellerReviews = await this.prisma.sellerReview.findMany({
        where: { productId: { not: null } },
        select: { userId: true, productId: true },
      });

      const reviewedUserIds = new Set(productReviews.map(r => r.userId));
      const sellerReviewedUserIds = new Set(sellerReviews.filter(r => r.productId === productId).map(r => r.userId));

      return reviews.filter(review => 
        review.userId === userId || // User's own review
        (reviewedUserIds.has(review.userId) && sellerReviewedUserIds.has(review.userId)) // Both sides reviewed
      );
    }
  }

  private async filterVisibleSellerReviews(reviews: any[], sellerId: string, userId?: string) {
    if (!userId) {
      // For anonymous users, only show reviews where both buyer and seller have reviewed
      const sellerReviews = await this.prisma.sellerReview.findMany({
        where: { sellerId },
        select: { userId: true, productId: true },
      });
      const productReviews = await this.prisma.productReview.findMany({
        where: { sellerId },
        select: { userId: true, productId: true },
      });

      const reviewedUserIds = new Set(sellerReviews.map(r => r.userId));
      const buyerReviewedUserIds = new Set(productReviews.map(r => r.userId));

      return reviews.filter(review => reviewedUserIds.has(review.userId) && buyerReviewedUserIds.has(review.userId));
    }

    // For authenticated users
    const userSellerIds = await this.prisma.seller.findMany({
      where: { userId },
      select: { id: true },
    });
    const isSeller = userSellerIds.some(s => s.id === sellerId);

    if (isSeller) {
      // Sellers can see all reviews on their profile where both sides have reviewed
      const sellerReviews = await this.prisma.sellerReview.findMany({
        where: { sellerId },
        select: { userId: true },
      });
      const productReviews = await this.prisma.productReview.findMany({
        where: { sellerId },
        select: { userId: true },
      });

      const reviewedUserIds = new Set(sellerReviews.map(r => r.userId));
      const buyerReviewedUserIds = new Set(productReviews.map(r => r.userId));

      return reviews.filter(review => reviewedUserIds.has(review.userId) && buyerReviewedUserIds.has(review.userId));
    } else {
      // Buyers can see their own reviews + all other buyer reviews on sellers
      return reviews.filter(review => review.userId === userId || true); // Show all for buyers
    }
  }
}
