import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import ProfessionalSpecialty from './ProfessionalSpecialty';
import ServiceLocation from './ServiceLocation';
import Specialty from './Specialty';

@Entity('professionals_specialties_service_locations')
class ProfessionalSpecialtyServiceLocation {
  @PrimaryColumn({ name: 'professional_id' })
  professionalId: string;

  @PrimaryColumn({ name: 'person_cpf' })
  personCpf: string;

  @PrimaryColumn({ name: 'specialty_id' })
  specialtyId: string;

  @PrimaryColumn({ name: 'service_location_id' })
  serviceLocationId: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(
    () => ProfessionalSpecialty,
    () => ProfessionalSpecialtyServiceLocation,
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
  professionalSpecialty: ProfessionalSpecialty;

  @ManyToOne(() => ServiceLocation)
  @JoinColumn({ name: 'service_location_id', referencedColumnName: 'id' })
  serviceLocation: ServiceLocation;

  @ManyToOne(() => Specialty)
  @JoinColumn({ name: 'specialty_id', referencedColumnName: 'id' })
  specialty: Specialty;
}

export default ProfessionalSpecialtyServiceLocation;
