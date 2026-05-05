import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';

import {
  CurrentUser,
  CurrentUser as CurrentUserPayload,
} from '../../common/decorators/current-user.decorator';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CreateProductReviewDto } from './dto/create-product-review.dto';
import { ReviewsService } from './reviews.service';

@Controller('product-reviews')
export class ProductReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @CurrentUserPayload() user: CurrentUser,
    @Body() createProductReviewDto: CreateProductReviewDto,
  ) {
    return this.reviewsService.createProductReview(
      user.userId,
      createProductReviewDto,
    );
  }

  @Get(':productId')
  findByProduct(
    @Param('productId') productId: string,
    @CurrentUserPayload() user?: CurrentUser,
  ) {
    return this.reviewsService.findProductReviews(productId, user?.userId);
  }
}
