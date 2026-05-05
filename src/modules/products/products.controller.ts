import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';

import {
  CurrentUser,
  CurrentUser as CurrentUserPayload,
} from '../../common/decorators/current-user.decorator';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { ConfirmProductDto } from './dto/confirm-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductQueryDto } from './dto/product-query.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @CurrentUserPayload() user: CurrentUser,
    @Body() createProductDto: CreateProductDto,
  ) {
    return this.productsService.create(user.userId, createProductDto);
  }

  @Get()
  findAll(@Query() productQueryDto: ProductQueryDto) {
    return this.productsService.findAll(productQueryDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findById(id);
  }

  @Post('confirm-bought')
  @UseGuards(JwtAuthGuard)
  confirmBought(
    @CurrentUserPayload() user: CurrentUser,
    @Body() confirmProductDto: ConfirmProductDto,
  ) {
    return this.productsService.confirmBought(user.userId, confirmProductDto);
  }

  @Post('confirm-sold')
  @UseGuards(JwtAuthGuard)
  confirmSold(
    @CurrentUserPayload() user: CurrentUser,
    @Body() confirmProductDto: ConfirmProductDto,
  ) {
    return this.productsService.confirmSold(user.userId, confirmProductDto);
  }
}
