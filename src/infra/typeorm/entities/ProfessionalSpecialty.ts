import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import Professional from './Professional';
import ProfessionalSpecialtyServiceLocation from './ProfessionalSpecialtyServiceLocation';
import Specialty from './Specialty';

@Entity('professionals_specialties')
class ProfessionalSpecialty {
  @PrimaryColumn({ name: 'professional_id' })
  professionalId: string;

  @PrimaryColumn({ name: 'person_cpf' })
  personCpf: string;

  @PrimaryColumn({ name: 'specialty_id' })
  specialtyId: string;

  @Column({ name: 'register_number' })
  registerNumber: string;

  @Column({ name: 'class_entity' })
  classEntity: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(
    () => Professional,
    professional => professional.id && professional.personCpf,
    { eager: true },
  )
  @JoinColumn([{ name: 'professional_id', referencedColumnName: 'id' }])
  professional: Professional;

  @ManyToOne(() => Specialty, specialty => specialty.id, { eager: true })
  @JoinColumn({ name: 'specialty_id', referencedColumnName: 'id' })
  specialty: Specialty;

  @OneToMany(
    () => ProfessionalSpecialtyServiceLocation,
    professionalSpecialtyServiceLocation =>
      professionalSpecialtyServiceLocation.professionalSpecialty,
    { cascade: ['insert', 'update'] },
  )
  @JoinColumn([
    {
      name: 'professional_id',
      referencedColumnName: 'professionalId',
    },
    {
      name: 'person_cpf',
      referencedColumnName: 'personCpf',
    },
    {
      name: 'specialty_id',
      referencedColumnName: 'specialtyId',
    },
  ])
  professionalsSpecialtiesServiceLocations: ProfessionalSpecialtyServiceLocation[];
}

export default ProfessionalSpecialty;
