import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';
import { CreateSellerDto } from './dto/create-seller.dto';

@Injectable()
export class SellersService {
  constructor(private readonly prisma: PrismaService) {}

  create(userId: string, createSellerDto: CreateSellerDto) {
    return this.prisma.seller.create({
      data: {
        userId,
        name: createSellerDto.name,
        location: createSellerDto.location,
        bio: createSellerDto.bio ?? '',
        avatarUrl: createSellerDto.avatarUrl ?? '',
        latitude: createSellerDto.latitude,
        longitude: createSellerDto.longitude,
      },
      include: {
        user: true,
      },
    });
  }

  findAll() {
    return this.prisma.seller.findMany({
      include: {
        user: true,
        reviews: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string) {
    const seller = await this.prisma.seller.findUnique({
      where: { id },
      include: {
        user: true,
        products: true,
        reviews: true,
      },
    });

    if (!seller) {
      throw new NotFoundException('Seller not found');
    }

    return seller;
  }
}
