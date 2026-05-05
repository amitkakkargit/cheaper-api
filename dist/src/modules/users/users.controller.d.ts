import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    me(user: CurrentUser): Promise<{
        id: string;
        email: string | null;
        phone: string | null;
        name: string | null;
        createdAt: Date;
    }>;
    findOne(id: string): Promise<{
        id: string;
        email: string | null;
        phone: string | null;
        name: string | null;
        createdAt: Date;
    }>;
}
