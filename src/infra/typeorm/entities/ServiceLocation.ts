import {
  Column,
  CreateDateColumn,
  Entity,
  IsNull,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import ProfessionalSpecialty from './ProfessionalSpecialty';

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

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => ProfessionalSpecialty, () => ServiceLocation)
  professionalsSpecialties: ProfessionalSpecialty[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export default ServiceLocation;
