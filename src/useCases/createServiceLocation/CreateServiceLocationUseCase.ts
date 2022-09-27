import ServiceLocation from 'infra/typeorm/entities/ServiceLocation';
import {
  ICreateServiceLocationDTO,
  IServiceLocationsRepository,
} from 'repositories/IServiceLocationsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateServiceLocationUseCase {
  constructor(
    @inject('ServiceLocationsRepository')
    private serviceLocationsRepository: IServiceLocationsRepository,
  ) {}

  async execute({
    countryStateId,
    zipCode,
    cityId,
    district,
    address,
    complement,
    phoneNumber,
    medicalInsurance,
  }: ICreateServiceLocationDTO): Promise<ServiceLocation> {
    const serviceLocation = await this.serviceLocationsRepository.create({
      countryStateId,
      zipCode,
      cityId,
      district,
      address,
      complement,
      phoneNumber,
      medicalInsurance,
    });

    return serviceLocation;
  }
}

export default CreateServiceLocationUseCase;
