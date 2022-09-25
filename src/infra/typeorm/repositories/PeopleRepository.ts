import DatabaseConfiguration from '@database/DatabaseConfiguration';
import {
  ICreatePeopleDTO,
  IPeopleRepository,
} from 'repositories/IPeopleRepository';
import { Repository } from 'typeorm';
import Person from '../entities/Person';

class PeopleRepository implements IPeopleRepository {
  private repository: Repository<Person>;

  constructor() {
    this.repository =
      DatabaseConfiguration.getDataSourceInstance().getRepository(Person);
  }

  async create({
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
  }: ICreatePeopleDTO): Promise<void> {
    const person = this.repository.create({
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
    });

    await this.repository.save(person);
  }

  async findByCpf(cpf: string): Promise<Person> {
    const person = await this.repository.findOne({ where: { cpf } });

    return person;
  }

  async list(): Promise<Person[]> {
    const people = await this.repository.find();

    return people;
  }
}

export default PeopleRepository;
