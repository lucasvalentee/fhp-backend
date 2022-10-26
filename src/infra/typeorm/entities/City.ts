import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import CountryState from './CountryState';
import ServiceLocation from './ServiceLocation';

@Entity('cities')
class City {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'country_state_id' })
  countryStateId: number;

  @OneToOne(() => CountryState)
  @JoinColumn({ name: 'country_state_id' })
  countryState: CountryState;

  @OneToMany(() => ServiceLocation, serviceLocation => serviceLocation.cityId)
  @JoinColumn({ name: 'city_id', referencedColumnName: 'cityId' })
  serviceLocation: ServiceLocation[];
}

export default City;
