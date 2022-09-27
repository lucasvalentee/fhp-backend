import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import PaymentMethod from './PaymentMethod';
import ProfessionalSpecialty from './ProfessionalSpecialty';
import Specialty from './Specialty';

@Entity('professionals_specialties_payment_methods')
class ProfessionalSpecialtyPaymentMethod {
  @PrimaryColumn({ name: 'professional_id' })
  professionalId: string;

  @PrimaryColumn({ name: 'person_cpf' })
  personCpf: string;

  @PrimaryColumn({ name: 'specialty_id' })
  specialtyId: string;

  @PrimaryColumn({ name: 'payment_method_id' })
  paymentMethodId: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(
    () => ProfessionalSpecialty,
    () => ProfessionalSpecialtyPaymentMethod,
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

  @ManyToOne(() => PaymentMethod)
  @JoinColumn({ name: 'payment_method_id', referencedColumnName: 'id' })
  paymentMethod: PaymentMethod;

  @ManyToOne(() => Specialty)
  @JoinColumn({ name: 'specialty_id', referencedColumnName: 'id' })
  specialty: Specialty;
}

export default ProfessionalSpecialtyPaymentMethod;
