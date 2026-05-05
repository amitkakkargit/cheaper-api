import { ConflictException } from '@nestjs/common';

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
    prisma.product.findUnique.mockResolvedValue({ id: 'product-1' });
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
    prisma.product.findUnique.mockResolvedValue({ id: 'product-1' });
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
});
