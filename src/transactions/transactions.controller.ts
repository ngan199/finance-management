import { Body, Controller, Post } from '@nestjs/common';
import { AddTransactionDto } from './dto/transactions.dto';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post('add-new')
  async addTransation(@Body() transactionData: AddTransactionDto) {
    return this.transactionsService.addTransaction(transactionData);
  }
}
