import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import ProfessionalSpecialty from './ProfessionalSpecialty';

@Entity('specialties')
class Specialty {
  @PrimaryColumn()
  id: string;

  @Column()
  description: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @OneToMany(
    () => ProfessionalSpecialty,
    professionalSpecialty => professionalSpecialty.specialtyId,
  )
  @JoinColumn({ name: 'specialty_id', referencedColumnName: 'specialtyId' })
  professionalSpecialty: ProfessionalSpecialty[];
}

export default Specialty;
