import { Prisma } from '../../../generated/prisma/client';
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
    findSellerReviews(sellerId: string): Prisma.PrismaPromise<({
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
    createProductReview(userId: string, createProductReviewDto: CreateProductReviewDto): Promise<{
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
    findProductReviews(productId: string): Prisma.PrismaPromise<({
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
    private ensureSellerExists;
    private ensureProductExists;
    private ensureCompletedPurchase;
    private handleUniqueReviewError;
}
