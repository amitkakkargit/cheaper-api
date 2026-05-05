import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private readonly jwtService;
    private readonly usersService;
    private readonly otpStore;
    constructor(jwtService: JwtService, usersService: UsersService);
    authenticateWithGoogle(idToken: string): Promise<{
        accessToken: string;
        user: {
            id: string;
            email: string | null;
            phone: string | null;
            name: string | null;
            createdAt: Date;
        };
    }>;
    requestPhoneOtp(phone: string): {
        phone: string;
        otp: string;
    };
    verifyPhoneOtp(phone: string, otp: string): Promise<{
        accessToken: string;
        user: {
            id: string;
            email: string | null;
            phone: string | null;
            name: string | null;
            createdAt: Date;
        };
    }>;
    getCurrentUser(userId: string): Promise<{
        id: string;
        email: string | null;
        phone: string | null;
        name: string | null;
        createdAt: Date;
    }>;
    private verifyGoogleIdToken;
    private createJwt;
    private assertPhone;
}
