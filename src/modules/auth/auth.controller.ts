import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

import {
  CurrentUser,
  CurrentUser as CurrentUserPayload,
} from '../../common/decorators/current-user.decorator';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { AuthService } from './auth.service';
import { GoogleAuthDto } from './dto/google-auth.dto';
import { RequestEmailOtpDto } from './dto/request-email-otp.dto';
import { RequestOtpDto } from './dto/request-otp.dto';
import { VerifyEmailOtpDto } from './dto/verify-email-otp.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('google')
  googleAuth(@Body() googleAuthDto: GoogleAuthDto) {
    return this.authService.authenticateWithGoogle(googleAuthDto.idToken);
  }

  @Post('phone/request-otp')
  requestPhoneOtp(@Body() requestOtpDto: RequestOtpDto) {
    return this.authService.requestPhoneOtp(requestOtpDto.phone);
  }

  @Post('phone/verify-otp')
  verifyPhoneOtp(@Body() verifyOtpDto: VerifyOtpDto) {
    return this.authService.verifyPhoneOtp(verifyOtpDto.phone, verifyOtpDto.otp);
  }

  @Post('email/request-otp')
  requestEmailOtp(@Body() requestEmailOtpDto: RequestEmailOtpDto) {
    return this.authService.requestEmailOtp(requestEmailOtpDto.email);
  }

  @Post('email/verify-otp')
  verifyEmailOtp(@Body() verifyEmailOtpDto: VerifyEmailOtpDto) {
    return this.authService.verifyEmailOtp(
      verifyEmailOtpDto.email,
      verifyEmailOtpDto.otp,
    );
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  me(@CurrentUserPayload() user: CurrentUser) {
    return this.authService.getCurrentUser(user.userId);
  }
}
