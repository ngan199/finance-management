import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ExpenseDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsNumber()
  transaction: number;

  @IsNotEmpty()
  @IsNumber()
  category_id: number;

  @IsString()
  url: string;
}
