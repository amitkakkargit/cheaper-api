import { PrismaService } from '../../prisma/prisma.service';
import { ConfirmProductDto } from './dto/confirm-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductQueryDto } from './dto/product-query.dto';
export declare class ProductsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    canSellerMarkSold(product: {
        seller: {
            userId: string;
        };
    }, userId: string): boolean;
    canBuyerMarkReceived(product: {
        seller: {
            userId: string;
        };
    }, userId: string): boolean;
    create(userId: string, createProductDto: CreateProductDto): Promise<{
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
        reviews: {
            id: string;
            createdAt: Date;
            userId: string;
            sellerId: string | null;
            productId: string;
            rating: number;
            comment: string | null;
        }[];
    } & {
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
    }>;
    findAll(productQueryDto: ProductQueryDto): import("../../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        seller: {
            reviews: {
                id: string;
                createdAt: Date;
                userId: string;
                sellerId: string;
                productId: string | null;
                rating: number;
                comment: string | null;
            }[];
        } & {
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
        reviews: {
            id: string;
            createdAt: Date;
            userId: string;
            sellerId: string | null;
            productId: string;
            rating: number;
            comment: string | null;
        }[];
    } & {
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
    })[]>;
    findById(id: string): Promise<{
        purchases: {
            id: string;
            createdAt: Date;
            sellerId: string;
            productId: string;
            buyerId: string;
            buyerConfirmedAt: Date | null;
            sellerConfirmedAt: Date | null;
        }[];
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
        reviews: {
            id: string;
            createdAt: Date;
            userId: string;
            sellerId: string | null;
            productId: string;
            rating: number;
            comment: string | null;
        }[];
    } & {
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
    }>;
    getTransactionStatus(productId: string, userId?: string): Promise<{
        productId: string;
        isSellerOwner: boolean;
        sellerMarkedSold: boolean;
        sellerMarkedSoldAt: Date | null;
        buyerConfirmed: boolean;
        buyerConfirmedAt: Date | null;
        buyerIdForSellerReview: string | null;
        canMarkSold: boolean;
        canMarkReceived: boolean;
        canBuyerReviewSeller: boolean;
        canBuyerReviewProduct: boolean;
        canSellerReviewBuyer: boolean;
        message: string;
    }>;
    getTransactionStatusMessage(status: {
        isSellerOwner: boolean;
        sellerMarkedSold: boolean;
        buyerConfirmed: boolean;
        canSellerReviewBuyer: boolean;
    }): "The buyer confirmed they received this product. You can now review the buyer." | "Waiting for buyer to confirm they received this product before buyer review is enabled." | "The seller marked this product as sold. If you bought this item, please confirm and leave a review." | "You confirmed you received this product. You can now leave a review." | "Waiting for seller to mark this product as sold before reviews are enabled.";
    confirmBought(userId: string, confirmProductDto: ConfirmProductDto): Promise<{
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
        sellerId: string;
        productId: string;
        buyerId: string;
        buyerConfirmedAt: Date | null;
        sellerConfirmedAt: Date | null;
    }>;
    confirmSold(userId: string, confirmProductDto: ConfirmProductDto): Promise<{
        purchases: {
            id: string;
            createdAt: Date;
            sellerId: string;
            productId: string;
            buyerId: string;
            buyerConfirmedAt: Date | null;
            sellerConfirmedAt: Date | null;
        }[];
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
        reviews: {
            id: string;
            createdAt: Date;
            userId: string;
            sellerId: string | null;
            productId: string;
            rating: number;
            comment: string | null;
        }[];
    } & {
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
    }>;
}
