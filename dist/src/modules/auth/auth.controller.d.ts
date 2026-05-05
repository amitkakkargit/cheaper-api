import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { AuthService } from './auth.service';
import { GoogleAuthDto } from './dto/google-auth.dto';
import { RequestOtpDto } from './dto/request-otp.dto';
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
            createdAt: Date;
        };
    }>;
    requestPhoneOtp(requestOtpDto: RequestOtpDto): {
        phone: string;
        otp: string;
    };
    verifyPhoneOtp(verifyOtpDto: VerifyOtpDto): Promise<{
        accessToken: string;
        user: {
            id: string;
            email: string | null;
            phone: string | null;
            name: string | null;
            createdAt: Date;
        };
    }>;
    me(user: CurrentUser): Promise<{
        id: string;
        email: string | null;
        phone: string | null;
        name: string | null;
        createdAt: Date;
    }>;
}
