import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';
import IncomeDetails from 'src/income-details/income-details.entity';

export class IncomesDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  user_id: number;

  @IsDateString()
  @IsNotEmpty()
  datetime: Date;

  @IsArray()
  @ValidateNested()
  @Type(() => IncomeDetails)
  details: IncomeDetails[];
}
