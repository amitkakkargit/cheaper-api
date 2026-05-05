import { IsString, MinLength } from 'class-validator';

export class VerifyOtpDto {
  @IsString()
  @MinLength(3)
  phone!: string;

  @IsString()
  @MinLength(4)
  otp!: string;
}
