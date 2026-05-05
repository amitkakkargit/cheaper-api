import { PrismaService } from '../../prisma/prisma.service';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findById(id: string): Promise<{
        id: string;
        email: string | null;
        phone: string | null;
        name: string | null;
        createdAt: Date;
    }>;
    findOrCreateByEmail(email: string, name?: string): Promise<{
        id: string;
        email: string | null;
        phone: string | null;
        name: string | null;
        createdAt: Date;
    }>;
    findOrCreateByPhone(phone: string): Promise<{
        id: string;
        email: string | null;
        phone: string | null;
        name: string | null;
        createdAt: Date;
    }>;
}
