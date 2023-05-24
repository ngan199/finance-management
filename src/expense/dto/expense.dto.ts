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
  transaction_id: number;

  @IsNotEmpty()
  @IsNumber()
  catagory_id: number;

  @IsString()
  upload_file: string;
}
