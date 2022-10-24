import CountryState from 'infra/typeorm/entities/CountryState';

interface ICountryStatesRepository {
  findAll(): Promise<CountryState[]>;

  findById(id: number): Promise<CountryState>;
}

export { ICountryStatesRepository };
