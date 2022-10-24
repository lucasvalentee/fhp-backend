import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import CountryState from './CountryState';

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
}

export default City;
