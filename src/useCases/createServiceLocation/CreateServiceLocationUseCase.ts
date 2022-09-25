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
    country_state_id,
    zip_code,
    city_id,
    district,
    address,
    complement,
    phone_number,
    medical_insurance,
  }: ICreateServiceLocationDTO): Promise<ServiceLocation> {
    console.log({
      country_state_id,
      zip_code,
      city_id,
      district,
      address,
      complement,
      phone_number,
      medical_insurance,
    });

    const serviceLocation = await this.serviceLocationsRepository.create({
      country_state_id,
      zip_code,
      city_id,
      district,
      address,
      complement,
      phone_number,
      medical_insurance,
    });

    return serviceLocation;
  }
}

export default CreateServiceLocationUseCase;
