import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import Person from './Person';
import ProfessionalSpecialty from './ProfessionalSpecialty';

@Entity('professionals')
class Professional {
  @PrimaryColumn()
  id: string;

  @PrimaryColumn({ name: 'person_cpf' })
  personCpf: string;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToOne(() => Person)
  @JoinColumn({ name: 'person_cpf', referencedColumnName: 'cpf' })
  person: Person;

  @OneToMany(
    () => ProfessionalSpecialty,
    professionalSpecialty =>
      professionalSpecialty.professionalId && professionalSpecialty.personCpf,
  )
  professionalSpecialty: ProfessionalSpecialty[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export default Professional;
