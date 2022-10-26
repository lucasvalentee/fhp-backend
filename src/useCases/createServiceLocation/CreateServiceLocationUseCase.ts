import ServiceLocation from 'infra/typeorm/entities/ServiceLocation';
import { IProfessionalsSpecialtiesServiceLocationsRepository } from 'repositories/IProfessionalsSpecialtiesServiceLocationsRepository';
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
    @inject('ProfessionalsSpecialtiesServiceLocationsRepository')
    private professionalsSpecialtiesServiceLocationsRepository: IProfessionalsSpecialtiesServiceLocationsRepository,
  ) {}

  async execute({
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
    professionalSpecialtyServiceLocation,
  }: ICreateServiceLocationDTO): Promise<ServiceLocation> {
    const serviceLocationAlreadyExists = !!id;

    const serviceLocation = await this.serviceLocationsRepository.create({
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
    });

    if (serviceLocation && professionalSpecialtyServiceLocation.length) {
      professionalSpecialtyServiceLocation.forEach(
        relation => (relation.serviceLocationId = serviceLocation.id),
      );

      if (serviceLocationAlreadyExists) {
        await this.professionalsSpecialtiesServiceLocationsRepository.deleteByServiceLocation(
          id,
        );
      }

      await this.professionalsSpecialtiesServiceLocationsRepository.create(
        professionalSpecialtyServiceLocation,
      );

      serviceLocation.professionalSpecialtyServiceLocation =
        professionalSpecialtyServiceLocation;
    }

    return serviceLocation;
  }
}

export default CreateServiceLocationUseCase;
