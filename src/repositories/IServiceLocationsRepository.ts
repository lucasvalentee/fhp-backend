import ServiceLocation from 'infra/typeorm/entities/ServiceLocation';

interface ICreateServiceLocationDTO {
  country_state_id: number;
  city_id: number;
  zip_code: string;
  district: string;
  address: string;
  complement?: string;
  phone_number: string;
  medical_insurance: string;
}

interface IServiceLocationsRepository {
  create({
    country_state_id,
    zip_code,
    city_id,
    district,
    address,
    complement,
    phone_number,
    medical_insurance,
  }: ICreateServiceLocationDTO): Promise<ServiceLocation>;
}

export { IServiceLocationsRepository, ICreateServiceLocationDTO };
