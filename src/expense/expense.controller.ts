import { Body, Controller, Post } from '@nestjs/common';
import { ExpenseDto } from './dto/expense.dto';
import { ExpenseService } from './expense.service';

@Controller('expense')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Post('add-new')
  async addExpense(
    @Body()
    expenseData: ExpenseDto,
  ) {
    return this.expenseService.addExpense(expenseData);
  }
}
