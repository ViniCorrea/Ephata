import { Gender, CivilStatus } from 'types/commons';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true, unique: true })
  email: string;

  @Column()
  address: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column('varchar')
  gender: Gender;

  @Column('int', { nullable: true })
  civilStatus: CivilStatus;

  @Column()
  birthDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
