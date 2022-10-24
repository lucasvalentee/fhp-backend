import { AppError } from '@errors/AppError';
import City from 'infra/typeorm/entities/City';
import { ICitiesRepository } from 'repositories/ICitiesRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class FindCityByIdUseCase {
  constructor(
    @inject('CitiesRepository')
    private citiesRepository: ICitiesRepository,
  ) {}

  async execute(id: string): Promise<City> {
    const cityId = Number(id);

    if (!cityId) {
      throw new AppError('Error on search city by id');
    }

    const city = await this.citiesRepository.findById(cityId);

    return city;
  }
}

export default FindCityByIdUseCase;
