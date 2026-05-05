import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { CreateSellerDto } from './dto/create-seller.dto';
import { SellersService } from './sellers.service';
export declare class SellersController {
    private readonly sellersService;
    constructor(sellersService: SellersService);
    create(user: CurrentUser, createSellerDto: CreateSellerDto): import("../../../generated/prisma/models").Prisma__SellerClient<{
        user: {
            id: string;
            email: string | null;
            phone: string | null;
            name: string | null;
            avatarUrl: string | null;
            createdAt: Date;
        };
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAll(): import("../../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        user: {
            id: string;
            email: string | null;
            phone: string | null;
            name: string | null;
            avatarUrl: string | null;
            createdAt: Date;
        };
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
    })[]>;
    findOne(id: string): Promise<{
        user: {
            id: string;
            email: string | null;
            phone: string | null;
            name: string | null;
            avatarUrl: string | null;
            createdAt: Date;
        };
        products: {
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
        }[];
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
    }>;
}
