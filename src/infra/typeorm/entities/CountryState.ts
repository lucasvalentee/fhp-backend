import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';
import ServiceLocation from './ServiceLocation';

@Entity('country_states')
class CountryState {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  uf: string;

  @OneToMany(() => ServiceLocation, serviceLocation => serviceLocation.cityId)
  @JoinColumn({
    name: 'country_state_id',
    referencedColumnName: 'countryStateId',
  })
  serviceLocation: ServiceLocation[];
}

export default CountryState;
