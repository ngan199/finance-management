import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Expense from './expense.entity';
import { ExpenseService } from './expenses.service';

@Module({
  imports: [TypeOrmModule.forFeature([Expense])],
  providers: [ExpenseService, Expense],
  exports: [ExpenseService, Expense],
})
export class ExpenseModule {}
