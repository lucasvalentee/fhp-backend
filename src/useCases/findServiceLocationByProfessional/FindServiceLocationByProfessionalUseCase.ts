import ProfessionalSpecialtyServiceLocation from 'infra/typeorm/entities/ProfessionalSpecialtyServiceLocation';
import ServiceLocation from 'infra/typeorm/entities/ServiceLocation';
import { IProfessionalsSpecialtiesServiceLocationsRepository } from 'repositories/IProfessionalsSpecialtiesServiceLocationsRepository';
import { IServiceLocationsRepository } from 'repositories/IServiceLocationsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class FindServiceLocationByProfessionalUseCase {
  constructor(
    @inject('ServiceLocationsRepository')
    private serviceLocationsRepository: IServiceLocationsRepository,
  ) {}

  async execute(professionalId: string): Promise<ServiceLocation[]> {
    const serviceLocations =
      await this.serviceLocationsRepository.findByProfessional(professionalId);

    return serviceLocations;
  }
}

export default FindServiceLocationByProfessionalUseCase;
