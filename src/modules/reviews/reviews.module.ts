import { Module } from '@nestjs/common';

import { ProductReviewsController } from './product-reviews.controller';
import { ReviewsController } from './reviews.controller';
import { ReviewsService } from './reviews.service';
import { SellerReviewsController } from './seller-reviews.controller';
import { BuyerReviewsController } from './buyer-reviews.controller';

@Module({
  controllers: [
    ReviewsController,
    SellerReviewsController,
    ProductReviewsController,
    BuyerReviewsController,
  ],
  providers: [ReviewsService],
})
export class ReviewsModule {}
