import { Gender, CivilStatus } from '../../types/commons';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import bcrypt from 'bcryptjs';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true, unique: true })
  email: string;

  @Column({ nullable: true })
  address: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column('int')
  gender: Gender;

  @Column('int', { nullable: true })
  civilStatus: CivilStatus;

  @Column()
  birthDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  hashSenha() {
    this.password = bcrypt.hashSync(this.password, 10);
  }
}
