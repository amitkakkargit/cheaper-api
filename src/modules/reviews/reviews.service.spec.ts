import { ConflictException, ForbiddenException } from '@nestjs/common';

import { ReviewsService } from './reviews.service';

describe('ReviewsService', () => {
  const createPrisma = () => ({
    seller: {
      findUnique: jest.fn(),
    },
    product: {
      findUnique: jest.fn(),
    },
    purchase: {
      findFirst: jest.fn(),
    },
    sellerReview: {
      create: jest.fn(),
      findMany: jest.fn(),
    },
    productReview: {
      create: jest.fn(),
      findMany: jest.fn(),
    },
  });

  it('blocks product review until buyer and seller confirmed handoff', async () => {
    const prisma = createPrisma();
    prisma.product.findUnique.mockResolvedValue({
      id: 'product-1',
      sellerId: 'seller-1',
      seller: { userId: 'seller-user' },
    });
    prisma.purchase.findFirst.mockResolvedValue(null);
    const service = new ReviewsService(prisma as never);

    await expect(
      service.createProductReview('user-1', {
        productId: 'product-1',
        sellerId: 'seller-1',
        rating: 5,
      }),
    ).rejects.toBeInstanceOf(ConflictException);
  });

  it('creates a product review after completed handoff', async () => {
    const prisma = createPrisma();
    prisma.product.findUnique.mockResolvedValue({
      id: 'product-1',
      sellerId: 'seller-1',
      seller: { userId: 'seller-user' },
    });
    prisma.purchase.findFirst.mockResolvedValue({ id: 'purchase-1' });
    prisma.productReview.create.mockResolvedValue({ id: 'review-1' });
    const service = new ReviewsService(prisma as never);

    await expect(
      service.createProductReview('user-1', {
        productId: 'product-1',
        sellerId: 'seller-1',
        rating: 5,
      }),
    ).resolves.toEqual({ id: 'review-1' });
  });

  it('blocks sellers from reviewing their own product', async () => {
    const prisma = createPrisma();
    prisma.product.findUnique.mockResolvedValue({
      id: 'product-1',
      sellerId: 'seller-1',
      seller: { userId: 'seller-user' },
    });
    const service = new ReviewsService(prisma as never);

    await expect(
      service.createProductReview('seller-user', {
        productId: 'product-1',
        sellerId: 'seller-1',
        rating: 5,
      }),
    ).rejects.toBeInstanceOf(ForbiddenException);
  });

  it('blocks sellers from reviewing their own seller profile', async () => {
    const prisma = createPrisma();
    prisma.seller.findUnique.mockResolvedValue({
      id: 'seller-1',
      userId: 'seller-user',
    });
    const service = new ReviewsService(prisma as never);

    await expect(
      service.createSellerReview('seller-user', {
        productId: 'product-1',
        sellerId: 'seller-1',
        rating: 5,
      }),
    ).rejects.toBeInstanceOf(ForbiddenException);
  });
});
