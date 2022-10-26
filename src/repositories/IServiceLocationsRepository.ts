import ProfessionalSpecialtyServiceLocation from 'infra/typeorm/entities/ProfessionalSpecialtyServiceLocation';
import ServiceLocation from 'infra/typeorm/entities/ServiceLocation';

interface ICreateServiceLocationDTO {
  id?: string;
  countryStateId: number;
  cityId: number;
  zipCode: string;
  district: string;
  address: string;
  complement?: string;
  phoneNumber: string;
  medicalInsurance: string;
  paymentMethods: string[];
  professionalSpecialtyServiceLocation?: ProfessionalSpecialtyServiceLocation[];
}

interface IServiceLocationsRepository {
  create({
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
  }: ICreateServiceLocationDTO): Promise<ServiceLocation>;

  delete(id: string): Promise<boolean>;

  findById(id: string): Promise<ServiceLocation>;

  findByProfessional(professionalId: string): Promise<ServiceLocation[]>;
}

export { IServiceLocationsRepository, ICreateServiceLocationDTO };
