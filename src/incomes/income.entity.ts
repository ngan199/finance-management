import User from 'src/users/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
class Income {
  @PrimaryGeneratedColumn()
  public id?: number;

  @ManyToOne(() => User)
  @JoinColumn()
  public user: number;

  @Column()
  public datetime: Date;

  @Column()
  total: number;
}
export default Income;
