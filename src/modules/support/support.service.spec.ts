import { ConflictException, NotFoundException } from '@nestjs/common';

import { SupportService } from './support.service';

describe('SupportService', () => {
  const createPrisma = () => ({
    product: {
      findUnique: jest.fn(),
    },
    supportTicket: {
      count: jest.fn(),
      create: jest.fn(),
    },
  });

  const dto = {
    subject: 'Login button broken',
    description: 'The login button does not send an OTP when tapped.',
    category: 'Login issue',
    email: 'user@example.com',
    source: 'web',
    deviceInfo: 'Chrome on Windows',
    appVersion: 'web-local',
  };

  it('creates a support ticket and sends admin/user notifications', async () => {
    const prisma = createPrisma();
    prisma.supportTicket.count.mockResolvedValue(0);
    prisma.supportTicket.create.mockResolvedValue({
      id: 'ticket-1',
      status: 'OPEN',
      createdAt: new Date('2026-05-05T12:00:00Z'),
      ...dto,
      userId: 'user-1',
      productId: null,
      screenshotUrl: null,
    });
    const emailService = { send: jest.fn().mockResolvedValue(undefined) };
    const service = new SupportService(prisma as never, emailService as never);

    await expect(service.create('user-1', dto)).resolves.toEqual(
      expect.objectContaining({ id: 'ticket-1', status: 'OPEN' }),
    );
    expect(emailService.send).toHaveBeenCalledTimes(2);
    expect(emailService.send).toHaveBeenCalledWith(
      expect.objectContaining({ to: 'amit.kakkar24@gmail.com' }),
    );
    expect(emailService.send).toHaveBeenCalledWith(
      expect.objectContaining({ to: 'user@example.com' }),
    );
  });

  it('validates optional product references', async () => {
    const prisma = createPrisma();
    prisma.supportTicket.count.mockResolvedValue(0);
    prisma.product.findUnique.mockResolvedValue(null);
    const service = new SupportService(
      prisma as never,
      { send: jest.fn() } as never,
    );

    await expect(
      service.create(undefined, { ...dto, productId: 'missing-product' }),
    ).rejects.toBeInstanceOf(NotFoundException);
  });

  it('blocks basic spam from the same submitter', async () => {
    const prisma = createPrisma();
    prisma.supportTicket.count.mockResolvedValue(5);
    const service = new SupportService(
      prisma as never,
      { send: jest.fn() } as never,
    );

    await expect(service.create('user-1', dto)).rejects.toBeInstanceOf(
      ConflictException,
    );
  });

  it('does not fail ticket creation when email notification fails', async () => {
    const prisma = createPrisma();
    prisma.supportTicket.count.mockResolvedValue(0);
    prisma.supportTicket.create.mockResolvedValue({
      id: 'ticket-1',
      status: 'OPEN',
      createdAt: new Date('2026-05-05T12:00:00Z'),
      ...dto,
      userId: null,
      productId: null,
      screenshotUrl: null,
    });
    const service = new SupportService(
      prisma as never,
      { send: jest.fn().mockRejectedValue(new Error('mail down')) } as never,
    );

    await expect(service.create(undefined, dto)).resolves.toEqual(
      expect.objectContaining({ id: 'ticket-1' }),
    );
  });
});
