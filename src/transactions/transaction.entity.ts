import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Transaction {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  expense_total: number;

  @Column()
  month: number;

  @Column()
  year: number;

  @Column()
  catagory_id: number;

  @Column()
  family: number;

  @Column()
  fitness: number;

  @Column()
  rent: number;

  @Column()
  electric: number;

  @Column()
  water: number;

  @Column()
  internet: number;
  @Column()
  cell_phone: number;

  @Column()
  groceries: number;

  @Column()
  eating_out: number;

  @Column()
  transportation: number;

  @Column()
  vacation: number;

  @Column()
  education: number;

  @Column()
  hobbies: number;

  @Column()
  entertainment: number;

  @Column()
  health_wellness: number;

  @Column()
  other: number;
}
export default Transaction;
