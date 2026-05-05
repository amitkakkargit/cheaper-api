import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { AuthService } from './auth.service';
import { GoogleAuthDto } from './dto/google-auth.dto';
import { RequestEmailOtpDto } from './dto/request-email-otp.dto';
import { RequestOtpDto } from './dto/request-otp.dto';
import { VerifyEmailOtpDto } from './dto/verify-email-otp.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    googleAuth(googleAuthDto: GoogleAuthDto): Promise<{
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
    requestPhoneOtp(requestOtpDto: RequestOtpDto): Promise<{
        phone: string;
        otp: string;
        expiresInSeconds: number;
    }>;
    verifyPhoneOtp(verifyOtpDto: VerifyOtpDto): Promise<{
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
    requestEmailOtp(requestEmailOtpDto: RequestEmailOtpDto): Promise<{
        email: string;
        otp: string;
        expiresInSeconds: number;
    }>;
    verifyEmailOtp(verifyEmailOtpDto: VerifyEmailOtpDto): Promise<{
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
}
