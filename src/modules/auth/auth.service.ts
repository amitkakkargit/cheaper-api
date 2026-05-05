import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  private readonly otpStore = new Map<string, string>();

  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async authenticateWithGoogle(idToken: string) {
    const googleUser = this.verifyGoogleIdToken(idToken);
    const user = await this.usersService.findOrCreateByEmail(
      googleUser.email,
      googleUser.name,
    );

    return {
      accessToken: await this.createJwt(user),
      user,
    };
  }

  requestPhoneOtp(phone: string) {
    this.assertPhone(phone);

    const otp = '123456';
    this.otpStore.set(phone, otp);

    return {
      phone,
      otp,
    };
  }

  async verifyPhoneOtp(phone: string, otp: string) {
    this.assertPhone(phone);

    if (this.otpStore.get(phone) !== otp) {
      throw new UnauthorizedException('Invalid OTP');
    }

    this.otpStore.delete(phone);

    const user = await this.usersService.findOrCreateByPhone(phone);

    return {
      accessToken: await this.createJwt(user),
      user,
    };
  }

  getCurrentUser(userId: string) {
    return this.usersService.findById(userId);
  }

  private verifyGoogleIdToken(idToken: string): { email: string; name?: string } {
    if (!idToken) {
      throw new BadRequestException('Google ID token is required');
    }

    const email = idToken.includes('@')
      ? idToken
      : `${idToken.replace(/[^a-zA-Z0-9._-]/g, '')}@google.mock`;

    return {
      email,
      name: email.split('@')[0],
    };
  }

  private async createJwt(user: {
    id: string;
    email: string | null;
    phone: string | null;
  }): Promise<string> {
    return this.jwtService.signAsync({
      sub: user.id,
      email: user.email,
      phone: user.phone,
    });
  }

  private assertPhone(phone: string): void {
    if (!phone) {
      throw new BadRequestException('Phone number is required');
    }
  }
}
