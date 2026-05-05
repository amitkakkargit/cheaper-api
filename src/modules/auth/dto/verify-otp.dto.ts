import { IsString, Length, MinLength } from 'class-validator';

export class VerifyOtpDto {
  @IsString()
  @MinLength(3)
  phone!: string;

  @IsString()
  @Length(6, 6)
  otp!: string;
}
