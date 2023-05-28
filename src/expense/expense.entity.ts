import Catagory from 'src/catagories/catagory.entity';
import Transaction from 'src/transactions/transaction.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Expense {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public name: string;

  @Column()
  public amount: number;

  @ManyToOne(() => Transaction)
  public transaction: number;

  @ManyToOne(() => Catagory)
  public catagory: number;

  @Column()
  public url: string;
}

export default Expense;
