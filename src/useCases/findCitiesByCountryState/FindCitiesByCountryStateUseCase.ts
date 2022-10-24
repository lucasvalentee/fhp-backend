import { AppError } from '@errors/AppError';
import City from 'infra/typeorm/entities/City';
import { ICitiesRepository } from 'repositories/ICitiesRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class FindCitiesByCountryStateUseCase {
  constructor(
    @inject('CitiesRepository')
    private citiesRepository: ICitiesRepository,
  ) {}

  async execute(id: string): Promise<City[]> {
    const countryStateId = Number(id);

    if (!countryStateId) {
      throw new AppError('Error on search city by country state');
    }

    const cities = await this.citiesRepository.findByCountryState(
      countryStateId,
    );

    return cities;
  }
}

export default FindCitiesByCountryStateUseCase;
