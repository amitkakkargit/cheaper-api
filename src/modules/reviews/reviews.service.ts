import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';

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
    await this.ensureSellerExists(createSellerReviewDto.sellerId);
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

  findSellerReviews(sellerId: string) {
    return this.prisma.sellerReview.findMany({
      where: { sellerId },
      include: {
        user: true,
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
    await this.ensureProductExists(createProductReviewDto.productId);
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

  findProductReviews(productId: string) {
    return this.prisma.productReview.findMany({
      where: { productId },
      include: {
        user: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  private async ensureSellerExists(sellerId: string): Promise<void> {
    const seller = await this.prisma.seller.findUnique({
      where: { id: sellerId },
      select: { id: true },
    });

    if (!seller) {
      throw new NotFoundException('Seller not found');
    }
  }

  private async ensureProductExists(productId: string): Promise<void> {
    const product = await this.prisma.product.findUnique({
      where: { id: productId },
      select: { id: true },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
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
}
