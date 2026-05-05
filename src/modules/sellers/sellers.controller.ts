import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';

import {
  CurrentUser,
  CurrentUser as CurrentUserPayload,
} from '../../common/decorators/current-user.decorator';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CreateSellerDto } from './dto/create-seller.dto';
import { SellersService } from './sellers.service';

@Controller('sellers')
export class SellersController {
  constructor(private readonly sellersService: SellersService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @CurrentUserPayload() user: CurrentUser,
    @Body() createSellerDto: CreateSellerDto,
  ) {
    return this.sellersService.create(user.userId, createSellerDto);
  }

  @Get()
  findAll() {
    return this.sellersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellersService.findById(id);
  }
}
