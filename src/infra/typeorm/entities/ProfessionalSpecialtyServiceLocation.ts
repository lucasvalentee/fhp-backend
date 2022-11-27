import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import Person from './Person';
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

  @ManyToOne(
    () => ServiceLocation,
    serviceLocation => serviceLocation.professionalSpecialtyServiceLocation,
  )
  @JoinColumn({ name: 'service_location_id', referencedColumnName: 'id' })
  serviceLocation: ServiceLocation;

  @ManyToOne(() => Specialty)
  @JoinColumn({ name: 'specialty_id', referencedColumnName: 'id' })
  specialty: Specialty;

  @ManyToOne(() => Person, { eager: true })
  @JoinColumn({ name: 'person_cpf', referencedColumnName: 'cpf' })
  person: Person;
}

export default ProfessionalSpecialtyServiceLocation;
