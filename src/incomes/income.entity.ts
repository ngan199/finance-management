import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Income {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public salary: number;

  @Column()
  public self_business: number;

  @Column()
  public invest: number;

  @Column()
  public other: number;

  @Column()
  public month: number;

  @Column()
  public year: number;

  @Column()
  public income_total: number;
}
export default Income;
