import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { ConfirmProductDto } from './dto/confirm-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductQueryDto } from './dto/product-query.dto';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(user: CurrentUser, createProductDto: CreateProductDto): Promise<{
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
    })[]>;
    findOne(id: string): Promise<{
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
    }>;
    confirmBought(user: CurrentUser, confirmProductDto: ConfirmProductDto): Promise<{
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
    confirmSold(user: CurrentUser, confirmProductDto: ConfirmProductDto): Promise<{
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
}
