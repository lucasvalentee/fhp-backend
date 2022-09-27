import ServiceLocation from 'infra/typeorm/entities/ServiceLocation';

interface ICreateServiceLocationDTO {
  countryStateId: number;
  cityId: number;
  zipCode: string;
  district: string;
  address: string;
  complement?: string;
  phoneNumber: string;
  medicalInsurance: string;
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
  }: ICreateServiceLocationDTO): Promise<ServiceLocation>;
}

export { IServiceLocationsRepository, ICreateServiceLocationDTO };
