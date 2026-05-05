import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../prisma/prisma.service';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private readonly jwtService;
    private readonly prisma;
    private readonly usersService;
    private readonly otpTtlMs;
    constructor(jwtService: JwtService, prisma: PrismaService, usersService: UsersService);
    authenticateWithGoogle(idToken: string): Promise<{
        accessToken: string;
        user: {
            id: string;
            email: string | null;
            phone: string | null;
            name: string | null;
            avatarUrl: string | null;
            createdAt: Date;
        };
    }>;
    requestPhoneOtp(phone: string): Promise<{
        phone: string;
        otp: string;
        expiresInSeconds: number;
    }>;
    verifyPhoneOtp(phone: string, otp: string): Promise<{
        accessToken: string;
        user: {
            id: string;
            email: string | null;
            phone: string | null;
            name: string | null;
            avatarUrl: string | null;
            createdAt: Date;
        };
    }>;
    requestEmailOtp(email: string): Promise<{
        email: string;
        otp: string;
        expiresInSeconds: number;
    }>;
    verifyEmailOtp(email: string, otp: string): Promise<{
        accessToken: string;
        user: {
            id: string;
            email: string | null;
            phone: string | null;
            name: string | null;
            avatarUrl: string | null;
            createdAt: Date;
        };
    }>;
    getCurrentUser(userId: string): Promise<{
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
    private verifyGoogleIdToken;
    private createJwt;
    private assertPhone;
    private createOtp;
    private verifyOtp;
    private generateOtp;
}
