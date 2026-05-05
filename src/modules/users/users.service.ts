import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        sellers: {
          select: {
            id: true,
          },
        },
      },
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

  updateProfile(id: string, updateProfileDto: UpdateProfileDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateProfileDto,
      include: {
        sellers: {
          select: {
            id: true,
          },
        },
      },
    });
  }
}
