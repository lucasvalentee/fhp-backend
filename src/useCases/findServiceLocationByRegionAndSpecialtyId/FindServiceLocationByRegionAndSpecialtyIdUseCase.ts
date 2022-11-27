import { AppError } from '@errors/AppError';
import ServiceLocation from 'infra/typeorm/entities/ServiceLocation';
import { IServiceLocationsRepository } from 'repositories/IServiceLocationsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class FindServiceLocationByRegionAndSpecialtyIdUseCase {
  constructor(
    @inject('ServiceLocationsRepository')
    private serviceLocationsRepository: IServiceLocationsRepository,
  ) {}

  async execute(
    countryStateId: string,
    cityId: string,
    specialtyId: string,
  ): Promise<ServiceLocation[]> {
    const countryStateIdAsNumber = Number(countryStateId);
    const cityIdAsNumber = Number(cityId);

    if (!countryStateIdAsNumber || !cityIdAsNumber) {
      throw new AppError('Error on search service locations by region');
    }

    const serviceLocations =
      await this.serviceLocationsRepository.findByRegionAndSpecialtyId(
        countryStateIdAsNumber,
        cityIdAsNumber,
        specialtyId,
      );

    return serviceLocations;
  }
}

export default FindServiceLocationByRegionAndSpecialtyIdUseCase;
