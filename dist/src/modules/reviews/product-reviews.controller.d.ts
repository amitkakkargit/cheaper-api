import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { CreateProductReviewDto } from './dto/create-product-review.dto';
import { ReviewsService } from './reviews.service';
export declare class ProductReviewsController {
    private readonly reviewsService;
    constructor(reviewsService: ReviewsService);
    create(user: CurrentUser, createProductReviewDto: CreateProductReviewDto): Promise<{
        user: {
            id: string;
            email: string | null;
            phone: string | null;
            name: string | null;
            createdAt: Date;
        };
        product: {
            id: string;
            name: string;
            createdAt: Date;
            location: string;
            latitude: number;
            longitude: number;
            sellerId: string;
            title: string;
            description: string;
            imageUrl: string;
            images: string[];
            videoUrl: string;
            videoStory: string;
            currentPrice: number;
            previousPrice: number;
            discountPercentage: number;
            condition: string;
            category: string;
        };
    } & {
        id: string;
        createdAt: Date;
        userId: string;
        sellerId: string | null;
        productId: string;
        rating: number;
        comment: string | null;
    }>;
    findByProduct(productId: string): import("../../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        user: {
            id: string;
            email: string | null;
            phone: string | null;
            name: string | null;
            createdAt: Date;
        };
    } & {
        id: string;
        createdAt: Date;
        userId: string;
        sellerId: string | null;
        productId: string;
        rating: number;
        comment: string | null;
    })[]>;
}
