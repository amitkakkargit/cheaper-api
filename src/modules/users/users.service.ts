import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async findOrCreateByEmail(email: string, name?: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (user) {
      return user;
    }

    return this.prisma.user.create({
      data: {
        email,
        name,
      },
    });
  }

  async findOrCreateByPhone(phone: string) {
    const user = await this.prisma.user.findUnique({
      where: { phone },
    });

    if (user) {
      return user;
    }

    return this.prisma.user.create({
      data: {
        phone,
      },
    });
  }
}
