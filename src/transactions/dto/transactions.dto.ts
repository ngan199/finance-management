import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class AddTransactionDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  @IsDateString()
  datetime: Date;

  @IsArray()
  expense: Array<{
    name: string;
    amount: number;
    transaction: number;
    catagory: number;
    url: string;
  }>;

  user_id: number;

  //   @IsNotEmpty()
  //   @IsNumber()
  //   total: number;

  //   @IsNotEmpty()
  //   @IsString()
  //   name: string;

  //   @IsNotEmpty()
  //   @IsNumber()
  //   amount: number;

  //   @IsNotEmpty()
  //   @IsNumber()
  //   transaction_id: number;

  //   @IsNotEmpty()
  //   @IsNumber()
  //   catagory_id: number;

  //   @IsString()
  //   url: string;
}
