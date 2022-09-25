import {
  Column,
  CreateDateColumn,
  Entity,
  IsNull,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('service_locations')
class ServiceLocation {
  @PrimaryColumn()
  id: string;

  @Column()
  country_state_id: number;

  @Column()
  zip_code: string;

  @Column()
  city_id: number;

  @Column()
  district: string;

  @Column()
  address: string;

  @Column({ nullable: true })
  complement: string;

  @Column()
  phone_number: string;

  @Column()
  medical_insurance: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export default ServiceLocation;
