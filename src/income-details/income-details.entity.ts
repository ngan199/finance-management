import Income from 'src/incomes/income.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
class IncomeDetails {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  name: string;

  @Column()
  amount: number;

  @ManyToOne(() => Income)
  @JoinColumn()
  income: number;
}
export default IncomeDetails;
