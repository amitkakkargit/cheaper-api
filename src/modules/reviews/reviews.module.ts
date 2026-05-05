import { Module } from '@nestjs/common';

import { ProductReviewsController } from './product-reviews.controller';
import { ReviewsController } from './reviews.controller';
import { ReviewsService } from './reviews.service';
import { SellerReviewsController } from './seller-reviews.controller';

@Module({
  controllers: [
    ReviewsController,
    SellerReviewsController,
    ProductReviewsController,
  ],
  providers: [ReviewsService],
})
export class ReviewsModule {}
