import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('professionals_specialties')
class ProfessionalSpecialty {
  @PrimaryColumn()
  professional_id: string;

  @PrimaryColumn()
  person_cpf: string;

  @PrimaryColumn()
  specialty_id: string;

  @Column()
  register_number: string;

  @Column()
  class_entity: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ProfessionalSpecialty;
