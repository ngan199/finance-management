import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Budget from './budget.entity';
import { BudgetDto } from './dto/budgetDto.dto';

@Injectable()
export class BudgetService {
  constructor(
    @InjectRepository(Budget)
    private budgetRespository: Repository<Budget>,
  ) {}

  async addBudget(budgetData: BudgetDto) {
    const newBudget = await this.budgetRespository.create(budgetData);
    await this.budgetRespository.save(newBudget);
    return newBudget;
  }
}
