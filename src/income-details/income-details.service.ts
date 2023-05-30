import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostgresErrorCode } from 'src/database/postgresErrorCodes.enum';
import { Repository } from 'typeorm';
import { IncomeDetailsDto } from './dto/income-details.dto';
import IncomeDetails from './income-details.entity';

@Injectable()
export class IncomeDetailsService {
  constructor(
    @InjectRepository(IncomeDetails)
    private readonly incomeDetailsRepository: Repository<IncomeDetails>,
  ) {}

  public async addIncomeDetails(incomeDetailsData: IncomeDetailsDto[]) {
    try {
      const newIncomeDetails =
        this.incomeDetailsRepository.create(incomeDetailsData);

      await this.incomeDetailsRepository.save(newIncomeDetails);

      return newIncomeDetails;
    } catch (error) {
      if (error?.code === PostgresErrorCode.InvalidType) {
        throw new HttpException('invalid input syntax', HttpStatus.FORBIDDEN);
      }

      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
