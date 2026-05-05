import { ConflictException, ForbiddenException } from '@nestjs/common';

import { ReviewsService } from './reviews.service';

describe('ReviewsService', () => {
  const createPrisma = () => ({
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
    buyerReview: {
      create: jest.fn(),
      findMany: jest.fn(),
    },
  });

  const product = {
    id: 'product-1',
    sellerId: 'seller-1',
    sellerMarkedSoldAt: null,
    seller: { userId: 'seller-user' },
  };

  it('blocks buyer review before any acknowledgement', async () => {
    const prisma = createPrisma();
    prisma.product.findUnique.mockResolvedValue(product);
    prisma.purchase.findFirst.mockResolvedValue(null);
    const service = new ReviewsService(prisma as never);

    await expect(
      service.createProductReview('buyer-user', {
        productId: 'product-1',
        sellerId: 'seller-1',
        rating: 5,
      }),
    ).rejects.toBeInstanceOf(ConflictException);
  });

  it('allows buyer product review after seller marks sold', async () => {
    const prisma = createPrisma();
    prisma.product.findUnique.mockResolvedValue({
      ...product,
      sellerMarkedSoldAt: new Date(),
    });
    prisma.purchase.findFirst.mockResolvedValue(null);
    prisma.productReview.create.mockResolvedValue({ id: 'review-1' });
    const service = new ReviewsService(prisma as never);

    await expect(
      service.createProductReview('buyer-user', {
        productId: 'product-1',
        sellerId: 'seller-1',
        rating: 4.5,
      }),
    ).resolves.toEqual({ id: 'review-1' });
  });

  it('rejects ratings outside half-star increments', async () => {
    const prisma = createPrisma();
    const service = new ReviewsService(prisma as never);

    await expect(
      service.createProductReview('buyer-user', {
        productId: 'product-1',
        sellerId: 'seller-1',
        rating: 4.3,
      }),
    ).rejects.toBeInstanceOf(ConflictException);
  });

  it('allows buyer seller review after buyer confirms receipt', async () => {
    const prisma = createPrisma();
    prisma.product.findUnique.mockResolvedValue(product);
    prisma.purchase.findFirst.mockResolvedValue({ id: 'purchase-1' });
    prisma.sellerReview.create.mockResolvedValue({ id: 'seller-review-1' });
    const service = new ReviewsService(prisma as never);

    await expect(
      service.createSellerReview('buyer-user', {
        productId: 'product-1',
        sellerId: 'seller-1',
        rating: 4,
      }),
    ).resolves.toEqual({ id: 'seller-review-1' });
  });

  it('blocks sellers from reviewing their own product', async () => {
    const prisma = createPrisma();
    prisma.product.findUnique.mockResolvedValue(product);
    const service = new ReviewsService(prisma as never);

    await expect(
      service.createProductReview('seller-user', {
        productId: 'product-1',
        sellerId: 'seller-1',
        rating: 5,
      }),
    ).rejects.toBeInstanceOf(ForbiddenException);
  });

  it('allows seller to review buyer after buyer confirms receipt', async () => {
    const prisma = createPrisma();
    prisma.product.findUnique.mockResolvedValue(product);
    prisma.purchase.findFirst.mockResolvedValue({ id: 'purchase-1' });
    prisma.buyerReview.create.mockResolvedValue({ id: 'buyer-review-1' });
    const service = new ReviewsService(prisma as never);

    await expect(
      service.createBuyerReview('seller-user', {
        productId: 'product-1',
        buyerId: 'buyer-user',
        rating: 5,
      }),
    ).resolves.toEqual({ id: 'buyer-review-1' });
  });

  it('blocks seller buyer review before buyer confirms receipt', async () => {
    const prisma = createPrisma();
    prisma.product.findUnique.mockResolvedValue(product);
    prisma.purchase.findFirst.mockResolvedValue(null);
    const service = new ReviewsService(prisma as never);

    await expect(
      service.createBuyerReview('seller-user', {
        productId: 'product-1',
        buyerId: 'buyer-user',
        rating: 5,
      }),
    ).rejects.toBeInstanceOf(ConflictException);
  });

  it('blocks non-sellers from reviewing buyers for a product', async () => {
    const prisma = createPrisma();
    prisma.product.findUnique.mockResolvedValue(product);
    const service = new ReviewsService(prisma as never);

    await expect(
      service.createBuyerReview('other-user', {
        productId: 'product-1',
        buyerId: 'buyer-user',
        rating: 5,
      }),
    ).rejects.toBeInstanceOf(ForbiddenException);
  });
});
