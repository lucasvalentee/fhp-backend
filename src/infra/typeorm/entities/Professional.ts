import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import Person from './Person';

@Entity('professionals')
class Professional {
  @PrimaryColumn()
  id: string;

  @PrimaryColumn()
  person_cpf: string;

  @Column({ default: true })
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne(() => Person)
  @JoinColumn({ name: 'person_cpf' })
  person: Person;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export default Professional;
