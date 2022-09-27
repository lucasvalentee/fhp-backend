import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import Professional from './Professional';
import User from './User';

@Entity('people')
class Person {
  @PrimaryColumn()
  cpf: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ name: 'phone_number' })
  phoneNumber: string;

  @Column({ name: 'country_state_id' })
  countryStateId: number;

  @Column({ name: 'zip_code' })
  zipCode: string;

  @Column({ name: 'city_id' })
  cityId: number;

  @Column()
  district: string;

  @Column()
  address: string;

  @Column({ nullable: true })
  complement: string;

  @Column({ name: 'user_id' })
  userId: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToOne(() => Professional, { eager: true })
  @JoinColumn({ name: 'cpf', referencedColumnName: 'personCpf' })
  professional: Professional;
}

export default Person;
