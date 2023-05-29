import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostgresErrorCode } from 'src/database/postgresErrorCodes.enum';
import { Repository } from 'typeorm';
import { ExpenseDto } from './dto/expense.dto';
import Expense from './expense.entity';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectRepository(Expense)
    private expenseReposity: Repository<Expense>,
  ) {}

  async addExpense(expenseData: ExpenseDto[]) {
    try {
      const newExpense = this.expenseReposity.create(expenseData);
      await this.expenseReposity.save(newExpense);
      return newExpense;
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
