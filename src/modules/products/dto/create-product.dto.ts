import {
  IsArray,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  sellerId!: string;

  @IsString()
  @MinLength(1)
  title!: string;

  @IsString()
  @MinLength(1)
  description!: string;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];

  @IsOptional()
  @IsString()
  videoUrl?: string;

  @IsOptional()
  @IsString()
  videoStory?: string;

  @IsNumber()
  @Min(0)
  currentPrice!: number;

  @IsNumber()
  @Min(0)
  previousPrice!: number;

  @IsInt()
  @Min(0)
  discountPercentage!: number;

  @IsString()
  condition!: string;

  @IsString()
  @MinLength(1)
  location!: string;

  @IsString()
  @MinLength(1)
  category!: string;

  @IsNumber()
  latitude!: number;

  @IsNumber()
  longitude!: number;
}
