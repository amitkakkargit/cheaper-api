import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { CreateSellerReviewDto } from './dto/create-seller-review.dto';
import { ReviewsService } from './reviews.service';
export declare class SellerReviewsController {
    private readonly reviewsService;
    constructor(reviewsService: ReviewsService);
    create(user: CurrentUser, createSellerReviewDto: CreateSellerReviewDto): Promise<{
        user: {
            id: string;
            email: string | null;
            phone: string | null;
            name: string | null;
            createdAt: Date;
        };
        seller: {
            id: string;
            name: string;
            createdAt: Date;
            userId: string;
            location: string;
            bio: string;
            avatarUrl: string;
            latitude: number;
            longitude: number;
        };
    } & {
        id: string;
        createdAt: Date;
        userId: string;
        sellerId: string;
        productId: string | null;
        rating: number;
        comment: string | null;
    }>;
    findBySeller(sellerId: string): import("../../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
        sellerId: string;
        productId: string | null;
        rating: number;
        comment: string | null;
    })[]>;
}
