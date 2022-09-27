import Person from 'infra/typeorm/entities/Person';
import User from 'infra/typeorm/entities/User';

interface ICreatePeopleDTO {
  cpf: string;
  name: string;
  email: string;
  phoneNumber: string;
  countryStateId: number;
  zipCode: string;
  cityId: number;
  district: string;
  address: string;
  complement?: string;
  userId: string;
  user: User;
}

interface IPeopleRepository {
  create({
    cpf,
    name,
    email,
    phoneNumber,
    countryStateId,
    zipCode,
    cityId,
    district,
    address,
    complement,
    userId,
    user,
  }: ICreatePeopleDTO): Promise<void>;

  findByCpf(cpf: string): Promise<Person>;

  list(): Promise<Person[]>;
}

export { IPeopleRepository, ICreatePeopleDTO };
