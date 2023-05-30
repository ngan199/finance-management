import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostgresErrorCode } from 'src/database/postgresErrorCodes.enum';
import { ExpenseService } from 'src/expenses/expenses.service';
import { Repository } from 'typeorm';
import { AddTransactionDto } from './dto/transactions.dto';
import Transaction from './transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transationsRepository: Repository<Transaction>,
    private readonly expenseService: ExpenseService,
  ) {}

  public async addTransactions(transactionData: AddTransactionDto) {
    try {
      const { user_id, datetime, expenses } = transactionData;

      const total = expenses.reduce((acc, crr) => acc + crr.amount, 0);

      const newTransaction = this.transationsRepository.create({
        datetime,
        user: user_id,
        total,
      });

      await this.transationsRepository.save(newTransaction);

      const expenseDataConvert = expenses.map((dt) => ({
        ...dt,
        transaction: newTransaction.id,
        category: dt.category_id,
      }));

      const newExpense = await this.expenseService.addExpenses(
        expenseDataConvert,
      );

      return {
        ...newTransaction,
        expenses: newExpense,
      };
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
