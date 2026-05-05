import { IsString } from 'class-validator';

export class ConfirmProductDto {
  @IsString()
  productId!: string;
}
