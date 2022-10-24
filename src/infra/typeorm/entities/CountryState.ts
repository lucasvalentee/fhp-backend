import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('country_states')
class CountryState {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  uf: string;
}

export default CountryState;
