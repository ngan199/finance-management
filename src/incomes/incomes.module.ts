import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import IncomeDetails from 'src/income-details/income-details.entity';
import { IncomeDetailsService } from 'src/income-details/income-details.service';
import Income from './income.entity';
import { IncomesController } from './incomes.controller';
import { IncomesService } from './incomes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Income, IncomeDetails])],
  providers: [IncomesService, IncomeDetailsService],
  exports: [IncomesService],
  controllers: [IncomesController],
})
export class IncomesModule {}
