import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { Prisma } from '../../../generated/prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateBuyerReviewDto } from './dto/create-buyer-review.dto';
import { CreateProductReviewDto } from './dto/create-product-review.dto';
import { CreateSellerReviewDto } from './dto/create-seller-review.dto';

@Injectable()
export class ReviewsService {
  constructor(private readonly prisma: PrismaService) {}

  async createSellerReview(
    userId: string,
    createSellerReviewDto: CreateSellerReviewDto,
  ) {
    this.validateHalfStepRating(createSellerReviewDto.rating);
    await this.validateBuyerReviewEligibility(
      userId,
      createSellerReviewDto.productId,
      createSellerReviewDto.sellerId,
      'seller',
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
      this.handleUniqueReviewError(
        error,
        'User has already reviewed this seller',
      );
    }
  }

  findSellerReviews(sellerId: string) {
    return this.prisma.sellerReview.findMany({
      where: { sellerId },
      select: {
        id: true,
        rating: true,
        comment: true,
        createdAt: true,
        user: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async createProductReview(
    userId: string,
    createProductReviewDto: CreateProductReviewDto,
  ) {
    this.validateHalfStepRating(createProductReviewDto.rating);
    await this.validateBuyerReviewEligibility(
      userId,
      createProductReviewDto.productId,
      createProductReviewDto.sellerId,
      'product',
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
      this.handleUniqueReviewError(
        error,
        'User has already reviewed this product',
      );
    }
  }

  findProductReviews(productId: string) {
    return this.prisma.productReview.findMany({
      where: { productId },
      select: {
        id: true,
        rating: true,
        comment: true,
        createdAt: true,
        user: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async createBuyerReview(
    reviewerId: string,
    createBuyerReviewDto: CreateBuyerReviewDto,
  ) {
    this.validateHalfStepRating(createBuyerReviewDto.rating);
    await this.validateSellerReviewEligibility(
      reviewerId,
      createBuyerReviewDto.productId,
      createBuyerReviewDto.buyerId,
    );

    try {
      return await this.prisma.buyerReview.create({
        data: {
          reviewerId,
          ...createBuyerReviewDto,
        },
        include: {
          reviewer: true,
          buyer: true,
          product: true,
        },
      });
    } catch (error) {
      this.handleUniqueReviewError(
        error,
        'Seller has already reviewed this buyer for this product',
      );
    }
  }

  findBuyerReviews(buyerId: string) {
    return this.prisma.buyerReview.findMany({
      where: { buyerId },
      select: {
        id: true,
        rating: true,
        comment: true,
        createdAt: true,
        reviewer: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async validateBuyerReviewEligibility(
    userId: string,
    productId: string,
    sellerId: string,
    target: 'product' | 'seller',
  ): Promise<void> {
    const product = await this.prisma.product.findUnique({
      where: { id: productId },
      select: {
        id: true,
        sellerId: true,
        sellerMarkedSoldAt: true,
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
      throw new ForbiddenException(
        target === 'product'
          ? 'Seller cannot review their own product'
          : 'Seller cannot review their own profile',
      );
    }

    const purchase = await this.prisma.purchase.findFirst({
      where: {
        buyerId: userId,
        productId,
        sellerId,
        buyerConfirmedAt: {
          not: null,
        },
      },
      select: { id: true },
    });

    if (!purchase && !product.sellerMarkedSoldAt) {
      throw new ConflictException(
        'Review is not enabled until the seller marks sold or the buyer confirms receipt',
      );
    }
  }

  async validateSellerReviewEligibility(
    reviewerId: string,
    productId: string,
    buyerId: string,
  ): Promise<void> {
    if (reviewerId === buyerId) {
      throw new ForbiddenException('Seller cannot review themselves');
    }

    const product = await this.prisma.product.findUnique({
      where: { id: productId },
      select: {
        id: true,
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

    if (product.seller.userId !== reviewerId) {
      throw new ForbiddenException('Only the product seller can review this buyer');
    }

    const purchase = await this.prisma.purchase.findFirst({
      where: {
        buyerId,
        productId,
        buyerConfirmedAt: {
          not: null,
        },
      },
      select: { id: true },
    });

    if (!purchase) {
      throw new ConflictException(
        'Seller can review the buyer only after the buyer confirms receipt',
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

  private validateHalfStepRating(rating: number): void {
    if (!Number.isFinite(rating) || rating < 1 || rating > 5 || !Number.isInteger(rating * 2)) {
      throw new ConflictException('Rating must be between 1 and 5 in 0.5 increments');
    }
  }
}
