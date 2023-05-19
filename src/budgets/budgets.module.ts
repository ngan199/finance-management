import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Budget from './budget.entity';
import { BudgetController } from './budgets.controller';
import { BudgetService } from './budgets.service';

@Module({
  imports: [TypeOrmModule.forFeature([Budget])],
  providers: [BudgetService],
  controllers: [BudgetController],
})
export class BudgetModule {}
