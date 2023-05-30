import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';
import { ExpenseDto } from 'src/expenses/dto/expense.dto';

export class AddTransactionDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  @IsDateString()
  datetime: Date;

  @IsArray()
  @ValidateNested()
  @Type(() => ExpenseDto)
  expenses: ExpenseDto[];

  @IsNotEmpty()
  user_id: number;
}
