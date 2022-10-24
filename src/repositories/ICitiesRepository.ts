import City from 'infra/typeorm/entities/City';

interface ICitiesRepository {
  findById(id: number): Promise<City>;

  findByCountryState(countryStateId: number): Promise<City[]>;
}

export { ICitiesRepository };
