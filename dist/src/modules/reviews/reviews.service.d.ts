import { Prisma } from '../../../generated/prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateBuyerReviewDto } from './dto/create-buyer-review.dto';
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
    findSellerReviews(sellerId: string): Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        rating: number;
        comment: string | null;
        user: {
            name: string | null;
        };
    }[]>;
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
            sellerMarkedSoldAt: Date | null;
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
    findProductReviews(productId: string): Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        rating: number;
        comment: string | null;
        user: {
            name: string | null;
        };
    }[]>;
    createBuyerReview(reviewerId: string, createBuyerReviewDto: CreateBuyerReviewDto): Promise<{
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
            sellerMarkedSoldAt: Date | null;
        };
        reviewer: {
            id: string;
            email: string | null;
            phone: string | null;
            name: string | null;
            avatarUrl: string | null;
            createdAt: Date;
        };
        buyer: {
            id: string;
            email: string | null;
            phone: string | null;
            name: string | null;
            avatarUrl: string | null;
            createdAt: Date;
        };
    } & {
        id: string;
        createdAt: Date;
        productId: string;
        buyerId: string;
        rating: number;
        comment: string | null;
        reviewerId: string;
    }>;
    findBuyerReviews(buyerId: string): Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        rating: number;
        comment: string | null;
        reviewer: {
            name: string | null;
        };
    }[]>;
    validateBuyerReviewEligibility(userId: string, productId: string, sellerId: string, target: 'product' | 'seller'): Promise<void>;
    validateSellerReviewEligibility(reviewerId: string, productId: string, buyerId: string): Promise<void>;
    private handleUniqueReviewError;
    private validateHalfStepRating;
}
