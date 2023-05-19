import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Budget {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public month: string;

  @Column()
  public year: string;

  @Column()
  public expense_total: string;

  @Column()
  public income_total: string;

  @Column()
  public saving: string;
}
export default Budget;
