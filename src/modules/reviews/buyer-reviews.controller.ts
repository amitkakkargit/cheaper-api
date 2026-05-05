import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';

import {
  CurrentUser,
  CurrentUser as CurrentUserPayload,
} from '../../common/decorators/current-user.decorator';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CreateBuyerReviewDto } from './dto/create-buyer-review.dto';
import { ReviewsService } from './reviews.service';

@Controller('buyer-reviews')
export class BuyerReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @CurrentUserPayload() user: CurrentUser,
    @Body() createBuyerReviewDto: CreateBuyerReviewDto,
  ) {
    return this.reviewsService.createBuyerReview(
      user.userId,
      createBuyerReviewDto,
    );
  }

  @Get(':buyerId')
  findByBuyer(@Param('buyerId') buyerId: string) {
    return this.reviewsService.findBuyerReviews(buyerId);
  }
}
