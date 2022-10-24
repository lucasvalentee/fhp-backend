import DatabaseConfiguration from '@database/DatabaseConfiguration';
import { ICountryStatesRepository } from 'repositories/ICountryStatesRepository';
import { Repository } from 'typeorm';
import CountryState from '../entities/CountryState';

class CountryStatesRepository implements ICountryStatesRepository {
  private repository: Repository<CountryState>;

  constructor() {
    this.repository =
      DatabaseConfiguration.getDataSourceInstance().getRepository(CountryState);
  }

  async findAll(): Promise<CountryState[]> {
    const countryStates = await this.repository.find();

    return countryStates;
  }

  async findById(id: number): Promise<CountryState> {
    const countryState = await this.repository.findOneBy({ id });

    return countryState;
  }
}

export default CountryStatesRepository;
