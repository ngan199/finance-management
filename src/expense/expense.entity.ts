import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Expense {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public name: string;

  @Column()
  public amount: number;

  @Column()
  public transaction_id: number;

  @Column()
  public catagory_id: number;

  @Column()
  public file_upload: string;
}

export default Expense;
