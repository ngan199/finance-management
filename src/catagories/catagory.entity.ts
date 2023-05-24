import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Catagory {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  name: string;
}
export default Catagory;
