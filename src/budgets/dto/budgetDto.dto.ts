import { IsNotEmpty } from 'class-validator';

export class BudgetDto {
  @IsNotEmpty()
  month: string;

  @IsNotEmpty()
  year: string;

  @IsNotEmpty()
  expense_total: string;

  @IsNotEmpty()
  income_total: string;

  @IsNotEmpty()
  saving: string;
}
