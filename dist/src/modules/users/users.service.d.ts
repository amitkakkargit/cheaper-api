import { PrismaService } from '../../prisma/prisma.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findById(id: string): Promise<{
        sellers: {
            id: string;
        }[];
    } & {
        id: string;
        email: string | null;
        phone: string | null;
        name: string | null;
        avatarUrl: string | null;
        createdAt: Date;
    }>;
    findOrCreateByEmail(email: string, name?: string): Promise<{
        id: string;
        email: string | null;
        phone: string | null;
        name: string | null;
        avatarUrl: string | null;
        createdAt: Date;
    }>;
    findOrCreateByPhone(phone: string): Promise<{
        id: string;
        email: string | null;
        phone: string | null;
        name: string | null;
        avatarUrl: string | null;
        createdAt: Date;
    }>;
    updateProfile(id: string, updateProfileDto: UpdateProfileDto): import("../../../generated/prisma/models").Prisma__UserClient<{
        sellers: {
            id: string;
        }[];
    } & {
        id: string;
        email: string | null;
        phone: string | null;
        name: string | null;
        avatarUrl: string | null;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
