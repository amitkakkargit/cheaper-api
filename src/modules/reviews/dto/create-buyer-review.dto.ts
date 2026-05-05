import { IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

export class CreateBuyerReviewDto {
  @IsString()
  productId!: string;

  @IsString()
  buyerId!: string;

  @IsNumber()
  @Min(1)
  @Max(5)
  rating!: number;

  @IsOptional()
  @IsString()
  comment?: string;
}
