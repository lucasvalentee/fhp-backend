import Person from 'infra/typeorm/entities/Person';

interface ICreatePeopleDTO {
  cpf: string;
  name: string;
  email: string;
  phone_number: string;
  country_state_id: number;
  zip_code: string;
  city_id: number;
  district: string;
  address: string;
  complement: string;
  user_id: string;
}

interface IPeopleRepository {
  create({
    cpf,
    name,
    email,
    phone_number,
    country_state_id,
    zip_code,
    city_id,
    district,
    address,
    complement,
    user_id,
  }: ICreatePeopleDTO): Promise<void>;

  findByCpf(cpf: string): Promise<Person>;

  list(): Promise<Person[]>;
}

export { IPeopleRepository, ICreatePeopleDTO };
