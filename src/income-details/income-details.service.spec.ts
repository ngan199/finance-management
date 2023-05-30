import { Test, TestingModule } from '@nestjs/testing';
import { IncomeDetailsService } from './income-details.service';

describe('IncomeDetailsService', () => {
  let service: IncomeDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IncomeDetailsService],
    }).compile();

    service = module.get<IncomeDetailsService>(IncomeDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
