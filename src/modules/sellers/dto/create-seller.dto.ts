import { IsNumber, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateSellerDto {
  @IsString()
  @MinLength(1)
  name!: string;

  @IsString()
  @MinLength(1)
  location!: string;

  @IsOptional()
  @IsString()
  bio?: string;

  @IsOptional()
  @IsString()
  avatarUrl?: string;

  @IsNumber()
  latitude!: number;

  @IsNumber()
  longitude!: number;
}
