import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import Category from 'src/categories/category.entity';
import Expense from 'src/expenses/expense.entity';
import IncomeDetails from 'src/income-details/income-details.entity';
import Income from 'src/incomes/income.entity';
import Transaction from 'src/transactions/transaction.entity';
import User from 'src/users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        entities: [User, Expense, Transaction, Category, Income, IncomeDetails],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
