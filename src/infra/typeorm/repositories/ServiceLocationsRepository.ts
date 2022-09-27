import DatabaseConfiguration from '@database/DatabaseConfiguration';
import {
  ICreateServiceLocationDTO,
  IServiceLocationsRepository,
} from 'repositories/IServiceLocationsRepository';
import { Repository } from 'typeorm';
import ServiceLocation from '../entities/ServiceLocation';

class ServiceLocationsRepository implements IServiceLocationsRepository {
  private repository: Repository<ServiceLocation>;

  constructor() {
    this.repository =
      DatabaseConfiguration.getDataSourceInstance().getRepository(
        ServiceLocation,
      );
  }

  async create({
    countryStateId,
    zipCode,
    cityId,
    district,
    address,
    complement,
    phoneNumber,
    medicalInsurance,
  }: ICreateServiceLocationDTO): Promise<ServiceLocation> {
    const serviceLocation = this.repository.create({
      countryStateId,
      zipCode,
      cityId,
      district,
      address,
      complement,
      phoneNumber,
      medicalInsurance,
    });

    return await this.repository.save(serviceLocation);
  }
}

export default ServiceLocationsRepository;
