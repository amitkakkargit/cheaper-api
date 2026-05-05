import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    me(user: CurrentUser): Promise<{
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
    updateMe(user: CurrentUser, updateProfileDto: UpdateProfileDto): import("../../../generated/prisma/models").Prisma__UserClient<{
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
    findOne(id: string): Promise<{
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
}
