import DatabaseConfiguration from '@database/DatabaseConfiguration';
import { ICitiesRepository } from 'repositories/ICitiesRepository';
import { Repository } from 'typeorm';
import City from '../entities/City';

class CitiesRepository implements ICitiesRepository {
  private repository: Repository<City>;

  constructor() {
    this.repository =
      DatabaseConfiguration.getDataSourceInstance().getRepository(City);
  }

  async findById(id: number): Promise<City> {
    const city = await this.repository.findOneBy({ id });

    return city;
  }

  async findByCountryState(countryStateId: number): Promise<City[]> {
    const cities = await this.repository.findBy({
      countryStateId,
    });

    return cities;
  }
}

export default CitiesRepository;
