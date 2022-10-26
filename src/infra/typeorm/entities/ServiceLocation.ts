import {
  Column,
  CreateDateColumn,
  Entity,
  IsNull,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import City from './City';
import CountryState from './CountryState';
import ProfessionalSpecialty from './ProfessionalSpecialty';
import ProfessionalSpecialtyServiceLocation from './ProfessionalSpecialtyServiceLocation';

@Entity('service_locations')
class ServiceLocation {
  @PrimaryColumn()
  id: string;

  @Column({ name: 'country_state_id' })
  countryStateId: number;

  @Column({ name: 'zip_code' })
  zipCode: string;

  @Column({ name: 'city_id' })
  cityId: number;

  @Column({ name: 'district' })
  district: string;

  @Column({ name: 'address' })
  address: string;

  @Column({ nullable: true })
  complement: string;

  @Column({ name: 'phone_number' })
  phoneNumber: string;

  @Column({ name: 'medical_insurance' })
  medicalInsurance: string;

  @Column({ name: 'payment_methods' })
  paymentMethods: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => ProfessionalSpecialty, () => ServiceLocation)
  professionalsSpecialties: ProfessionalSpecialty[];

  @OneToMany(
    () => ProfessionalSpecialtyServiceLocation,
    professionalSpecialtyServiceLocation =>
      professionalSpecialtyServiceLocation.serviceLocation,
    { eager: true },
  )
  @JoinColumn({
    name: 'service_location_id',
    referencedColumnName: 'serviceLocationId',
  })
  professionalSpecialtyServiceLocation: ProfessionalSpecialtyServiceLocation[];

  @ManyToOne(() => CountryState, countryState => countryState.id, {
    eager: true,
  })
  @JoinColumn([{ name: 'country_state_id', referencedColumnName: 'id' }])
  countryState: CountryState;

  @ManyToOne(() => City, city => city.id, {
    eager: true,
  })
  @JoinColumn([{ name: 'city_id', referencedColumnName: 'id' }])
  city: City;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export default ServiceLocation;
