import { PrismaService } from '../../prisma/prisma.service';
import { CreateProductReviewDto } from './dto/create-product-review.dto';
import { CreateSellerReviewDto } from './dto/create-seller-review.dto';
export declare class ReviewsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createSellerReview(userId: string, createSellerReviewDto: CreateSellerReviewDto): Promise<{
        user: {
            id: string;
            email: string | null;
            phone: string | null;
            name: string | null;
            avatarUrl: string | null;
            createdAt: Date;
        };
        seller: {
            id: string;
            name: string;
            avatarUrl: string;
            createdAt: Date;
            userId: string;
            location: string;
            bio: string;
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
    findSellerReviews(sellerId: string, userId?: string): Promise<any[]>;
    createProductReview(userId: string, createProductReviewDto: CreateProductReviewDto): Promise<{
        user: {
            id: string;
            email: string | null;
            phone: string | null;
            name: string | null;
            avatarUrl: string | null;
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
    findProductReviews(productId: string, userId?: string): Promise<any[]>;
    private ensureSellerCanBeReviewed;
    private ensureProductCanBeReviewed;
    private ensureCompletedPurchase;
    private handleUniqueReviewError;
    private filterVisibleReviews;
    private filterVisibleSellerReviews;
}
