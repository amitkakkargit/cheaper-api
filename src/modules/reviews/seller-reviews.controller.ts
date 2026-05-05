import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';

import {
  CurrentUser,
  CurrentUser as CurrentUserPayload,
} from '../../common/decorators/current-user.decorator';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CreateSellerReviewDto } from './dto/create-seller-review.dto';
import { ReviewsService } from './reviews.service';

@Controller('seller-reviews')
export class SellerReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @CurrentUserPayload() user: CurrentUser,
    @Body() createSellerReviewDto: CreateSellerReviewDto,
  ) {
    return this.reviewsService.createSellerReview(
      user.userId,
      createSellerReviewDto,
    );
  }

  @Get(':sellerId')
  findBySeller(@Param('sellerId') sellerId: string) {
    return this.reviewsService.findSellerReviews(sellerId);
  }
}
