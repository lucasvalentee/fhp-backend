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
    country_state_id,
    zip_code,
    city_id,
    district,
    address,
    complement,
    phone_number,
    medical_insurance,
  }: ICreateServiceLocationDTO): Promise<ServiceLocation> {
    const serviceLocation = this.repository.create({
      country_state_id,
      zip_code,
      city_id,
      district,
      address,
      complement,
      phone_number,
      medical_insurance,
    });

    console.log(serviceLocation);

    const t = await this.repository.save(serviceLocation);

    console.log(t);

    return t;
  }
}

export default ServiceLocationsRepository;
