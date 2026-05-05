import {
  IsEmail,
  IsIn,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

const categories = [
  'Login issue',
  'Payment issue',
  'Product issue',
  'Seller issue',
  'App bug',
  'Account issue',
  'Delivery issue',
  'Other',
] as const;

export class CreateSupportTicketDto {
  @IsString()
  @MinLength(3)
  @MaxLength(140)
  subject!: string;

  @IsString()
  @MinLength(10)
  @MaxLength(4000)
  description!: string;

  @IsString()
  @IsIn(categories)
  category!: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsString()
  @IsIn(['web', 'mobile'])
  source!: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  deviceInfo?: string;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  appVersion?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  screenshotUrl?: string;

  @IsOptional()
  @IsString()
  productId?: string;
}
