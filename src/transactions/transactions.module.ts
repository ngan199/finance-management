import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Expense from 'src/expenses/expense.entity';
import { ExpenseService } from 'src/expenses/expenses.service';
import Transaction from './transaction.entity';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction, Expense])],
  providers: [TransactionsService, ExpenseService],
  exports: [TransactionsService],
  controllers: [TransactionsController],
})
export class TransactionsModule {}
