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
    id,
    countryStateId,
    zipCode,
    cityId,
    district,
    address,
    complement,
    phoneNumber,
    medicalInsurance,
    paymentMethods,
  }: ICreateServiceLocationDTO): Promise<ServiceLocation> {
    const serviceLocation = this.repository.create({
      id,
      countryStateId,
      zipCode,
      cityId,
      district,
      address,
      complement,
      phoneNumber,
      medicalInsurance,
      paymentMethods: JSON.stringify(paymentMethods),
    });

    return await this.repository.save(serviceLocation);
  }

  async delete(id: string): Promise<boolean> {
    const response = await this.repository.delete({
      id,
    });

    return !!response.affected;
  }

  async findById(id: string): Promise<ServiceLocation> {
    return await this.repository.findOneBy({ id });
  }

  async findByProfessional(professionalId: string): Promise<ServiceLocation[]> {
    return await this.repository.find({
      where: {
        professionalSpecialtyServiceLocation: {
          professionalId,
        },
      },
    });
  }
}

export default ServiceLocationsRepository;
