import { Body, Controller, Post } from '@nestjs/common';
import { IncomesDto } from './dto/incomes.dto';
import { IncomesService } from './incomes.service';

@Controller('incomes')
export class IncomesController {
  constructor(private readonly incomesService: IncomesService) {}

  @Post('add-new')
  async addIncomes(@Body() incomesData: IncomesDto) {
    return this.incomesService.addIncomes(incomesData);
  }
}
