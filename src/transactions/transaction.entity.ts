import User from 'src/users/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
class Transaction {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public datetime: Date;

  @Column()
  public total: number;

  @ManyToOne(() => User)
  @JoinColumn()
  public user: number;
}
export default Transaction;
