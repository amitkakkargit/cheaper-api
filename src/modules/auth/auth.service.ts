import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { PrismaService } from '../../prisma/prisma.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  private readonly otpTtlMs = 60_000;

  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
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

  async requestPhoneOtp(phone: string) {
    this.assertPhone(phone);

    const otp = await this.createOtp('phone', phone);

    return {
      phone,
      otp,
      expiresInSeconds: 60,
    };
  }

  async verifyPhoneOtp(phone: string, otp: string) {
    this.assertPhone(phone);
    await this.verifyOtp('phone', phone, otp);

    const user = await this.usersService.findOrCreateByPhone(phone);

    return {
      accessToken: await this.createJwt(user),
      user,
    };
  }

  async requestEmailOtp(email: string) {
    const otp = await this.createOtp('email', email.toLowerCase());

    return {
      email,
      otp,
      expiresInSeconds: 60,
    };
  }

  async verifyEmailOtp(email: string, otp: string) {
    const normalizedEmail = email.toLowerCase();
    await this.verifyOtp('email', normalizedEmail, otp);

    const user = await this.usersService.findOrCreateByEmail(normalizedEmail);

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

  private async createOtp(channel: 'email' | 'phone', target: string) {
    const code = this.generateOtp();

    await this.prisma.otpCode.create({
      data: {
        channel,
        target,
        code,
        expiresAt: new Date(Date.now() + this.otpTtlMs),
      },
    });

    return code;
  }

  private async verifyOtp(
    channel: 'email' | 'phone',
    target: string,
    code: string,
  ) {
    const otpCode = await this.prisma.otpCode.findFirst({
      where: {
        channel,
        target,
        code,
        usedAt: null,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    if (!otpCode || otpCode.expiresAt.getTime() < Date.now()) {
      throw new UnauthorizedException('Invalid or expired OTP');
    }

    await this.prisma.otpCode.update({
      where: {
        id: otpCode.id,
      },
      data: {
        usedAt: new Date(),
      },
    });
  }

  private generateOtp(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }
}
