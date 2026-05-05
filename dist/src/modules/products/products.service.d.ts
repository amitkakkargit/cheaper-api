import { PrismaService } from '../../prisma/prisma.service';
import { ConfirmProductDto } from './dto/confirm-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductQueryDto } from './dto/product-query.dto';
export declare class ProductsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(userId: string, createProductDto: CreateProductDto): Promise<{
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
            createdAt: Date;
            userId: string;
            location: string;
            bio: string;
            avatarUrl: string;
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
            createdAt: Date;
            userId: string;
            location: string;
            bio: string;
            avatarUrl: string;
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
    }>;
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
        };
        buyer: {
            id: string;
            email: string | null;
            phone: string | null;
            name: string | null;
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
        buyer: {
            id: string;
            email: string | null;
            phone: string | null;
            name: string | null;
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
}
