import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import IncomeDetails from './income-details.entity';
import { IncomeDetailsService } from './income-details.service';

@Module({
  imports: [TypeOrmModule.forFeature([IncomeDetails])],
  providers: [IncomeDetailsService, IncomeDetails],
  exports: [IncomeDetailsService, IncomeDetails],
})
export class IncomeDetailsModule {}
