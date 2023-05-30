import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostgresErrorCode } from 'src/database/postgresErrorCodes.enum';
import { IncomeDetailsService } from 'src/income-details/income-details.service';
import { Repository } from 'typeorm';
import { IncomesDto } from './dto/incomes.dto';
import Income from './income.entity';

@Injectable()
export class IncomesService {
  constructor(
    @InjectRepository(Income)
    private readonly incomesRepository: Repository<Income>,
    private readonly incomeDetailsService: IncomeDetailsService,
  ) {}

  public async addIncomes(incomesData: IncomesDto) {
    try {
      const { user_id, datetime, details } = incomesData;

      const total = details.reduce((acc, crr) => acc + crr.amount, 0);

      const newIncome = this.incomesRepository.create({
        user: user_id,
        datetime,
        total,
      });

      await this.incomesRepository.save(newIncome);

      const newDetailsData = details.map((dt) => ({
        ...dt,
        income_id: newIncome.id,
      }));

      const newIncomeDetails = await this.incomeDetailsService.addIncomeDetails(
        newDetailsData,
      );

      return { ...newIncome, details: newIncomeDetails };
    } catch (error) {
      if (error?.code === PostgresErrorCode.InvalidType) {
        throw new HttpException('invalid input syntax', HttpStatus.FORBIDDEN);
      }

      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
