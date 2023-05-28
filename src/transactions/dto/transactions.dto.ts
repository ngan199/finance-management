import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AddTransactionDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  @IsDateString()
  datetime: Date;

  @IsNotEmpty()
  @IsNumber()
  total: number;

  @IsNotEmpty()
  @IsNumber()
  user_id: number;

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
  url: string;
}
