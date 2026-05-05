import {
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';
import { CreateSupportTicketDto } from './dto/create-support-ticket.dto';
import { EmailService } from './email.service';

@Injectable()
export class SupportService {
  private readonly logger = new Logger(SupportService.name);
  private readonly adminEmail =
    process.env.SUPPORT_ADMIN_EMAIL ?? 'amit.kakkar24@gmail.com';

  constructor(
    private readonly prisma: PrismaService,
    private readonly emailService: EmailService,
  ) {}

  async create(userId: string | undefined, dto: CreateSupportTicketDto) {
    await this.preventSpam(userId, dto.email);

    if (dto.productId) {
      const product = await this.prisma.product.findUnique({
        where: { id: dto.productId },
        select: { id: true },
      });

      if (!product) {
        throw new NotFoundException('Referenced product not found');
      }
    }

    const ticket = await this.prisma.supportTicket.create({
      data: {
        subject: dto.subject.trim(),
        description: dto.description.trim(),
        category: dto.category,
        email: dto.email?.toLowerCase(),
        source: dto.source,
        deviceInfo: dto.deviceInfo,
        appVersion: dto.appVersion,
        screenshotUrl: dto.screenshotUrl,
        productId: dto.productId,
        userId,
      },
    });

    await this.sendNotifications(ticket).catch((error) => {
      this.logger.error(
        `Support ticket ${ticket.id} email notification failed`,
        error instanceof Error ? error.stack : undefined,
      );
    });

    return {
      id: ticket.id,
      status: ticket.status,
      createdAt: ticket.createdAt,
      message: 'Support ticket created. Our team will review it soon.',
    };
  }

  private async preventSpam(userId?: string, email?: string) {
    if (!userId && !email) {
      return;
    }

    const recentCount = await this.prisma.supportTicket.count({
      where: {
        createdAt: {
          gte: new Date(Date.now() - 60 * 60 * 1000),
        },
        OR: [
          userId ? { userId } : undefined,
          email ? { email: email.toLowerCase() } : undefined,
        ].filter(Boolean) as Array<{ userId?: string; email?: string }>,
      },
    });

    if (recentCount >= 5) {
      throw new ConflictException(
        'Too many support tickets submitted recently. Please try again later.',
      );
    }
  }

  private async sendNotifications(ticket: {
    id: string;
    subject: string;
    description: string;
    category: string;
    email: string | null;
    userId: string | null;
    source: string;
    productId: string | null;
    deviceInfo: string | null;
    appVersion: string | null;
    createdAt: Date;
  }) {
    const details = [
      `Ticket ID: ${ticket.id}`,
      `Title: ${ticket.subject}`,
      `Category: ${ticket.category}`,
      `Description: ${ticket.description}`,
      `User email: ${ticket.email ?? 'Not provided'}`,
      `User ID: ${ticket.userId ?? 'Anonymous'}`,
      `Timestamp: ${ticket.createdAt.toISOString()}`,
      `Platform/source: ${ticket.source}`,
      `Product reference: ${ticket.productId ?? 'None'}`,
      `Device/platform details: ${ticket.deviceInfo ?? 'Not provided'}`,
      `App version: ${ticket.appVersion ?? 'Not provided'}`,
    ].join('\n');

    await this.emailService.send({
      to: this.adminEmail,
      subject: `[Cheaper Support] ${ticket.category}: ${ticket.subject}`,
      text: details,
    });

    if (ticket.email) {
      await this.emailService.send({
        to: ticket.email,
        subject: `Cheaper support ticket received: ${ticket.id}`,
        text: [
          'Thanks for contacting Cheaper Support.',
          '',
          `Your ticket number is ${ticket.id}.`,
          'We received the following details and will review them soon:',
          '',
          details,
        ].join('\n'),
      });
    }
  }
}
