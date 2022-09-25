import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import User from './User';

@Entity('people')
class Person {
  @PrimaryColumn()
  cpf: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone_number: string;

  @Column()
  country_state_id: number;

  @Column()
  zip_code: string;

  @Column()
  city_id: number;

  @Column()
  district: string;

  @Column()
  address: string;

  @Column()
  complement: string;

  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;
}

export default Person;
