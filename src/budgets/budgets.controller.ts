import { Body, Controller, Post } from '@nestjs/common';
import { BudgetService } from './budgets.service';
import { BudgetDto } from './dto/budgetDto.dto';

@Controller('budget')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Post('add-new')
  async addBudget(
    @Body()
    budgetData: BudgetDto,
  ) {
    return this.budgetService.addBudget(budgetData);
  }
}
