import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Expense from 'src/expense/expense.entity';
import { ExpenseService } from 'src/expense/expense.service';
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
