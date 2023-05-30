import { IsNotEmpty } from 'class-validator';

export class IncomeDetailsDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  income_id: number;
}
