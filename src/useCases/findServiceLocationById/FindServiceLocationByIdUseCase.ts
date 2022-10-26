import ServiceLocation from 'infra/typeorm/entities/ServiceLocation';
import { IServiceLocationsRepository } from 'repositories/IServiceLocationsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class FindServiceLocationByIdUseCase {
  constructor(
    @inject('ServiceLocationsRepository')
    private serviceLocationsRepository: IServiceLocationsRepository,
  ) {}

  async execute(id: string): Promise<ServiceLocation> {
    const serviceLocation = await this.serviceLocationsRepository.findById(id);

    return serviceLocation;
  }
}

export default FindServiceLocationByIdUseCase;
