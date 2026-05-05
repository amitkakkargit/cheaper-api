import { ForbiddenException, NotFoundException } from '@nestjs/common';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  const createPrisma = () => ({
    seller: {
      findUnique: jest.fn(),
    },
    product: {
      create: jest.fn(),
      findUnique: jest.fn(),
    },
    purchase: {
      upsert: jest.fn(),
      findFirst: jest.fn(),
      update: jest.fn(),
    },
  });

  const dto = {
    sellerId: 'seller-1',
    title: 'Used phone',
    description: 'Good condition',
    currentPrice: 100,
    previousPrice: 150,
    discountPercentage: 33,
    condition: 'Used',
    location: 'Bengaluru',
    category: 'Electronics',
    latitude: 12.9,
    longitude: 77.5,
  };

  it('allows a seller owner to create a product', async () => {
    const prisma = createPrisma();
    prisma.seller.findUnique.mockResolvedValue({ userId: 'user-1' });
    prisma.product.create.mockResolvedValue({ id: 'product-1' });
    const service = new ProductsService(prisma as never);

    await expect(service.create('user-1', dto)).resolves.toEqual({ id: 'product-1' });
    expect(prisma.product.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({ sellerId: 'seller-1', title: 'Used phone' }),
      }),
    );
  });

  it('blocks product creation by a non-owner', async () => {
    const prisma = createPrisma();
    prisma.seller.findUnique.mockResolvedValue({ userId: 'owner-user' });
    const service = new ProductsService(prisma as never);

    await expect(service.create('other-user', dto)).rejects.toBeInstanceOf(ForbiddenException);
  });

  it('requires seller confirmation to come from the seller owner', async () => {
    const prisma = createPrisma();
    prisma.product.findUnique.mockResolvedValue({
      id: 'product-1',
      sellerId: 'seller-1',
      seller: { userId: 'owner-user' },
      reviews: [],
      purchases: [],
    });
    const service = new ProductsService(prisma as never);

    await expect(
      service.confirmSold('other-user', { productId: 'product-1' }),
    ).rejects.toBeInstanceOf(ForbiddenException);
  });

  it('requires a buyer confirmation before seller can confirm sold', async () => {
    const prisma = createPrisma();
    prisma.product.findUnique.mockResolvedValue({
      id: 'product-1',
      sellerId: 'seller-1',
      seller: { userId: 'owner-user' },
      reviews: [],
      purchases: [],
    });
    prisma.purchase.findFirst.mockResolvedValue(null);
    const service = new ProductsService(prisma as never);

    await expect(
      service.confirmSold('owner-user', { productId: 'product-1' }),
    ).rejects.toBeInstanceOf(NotFoundException);
  });
});
