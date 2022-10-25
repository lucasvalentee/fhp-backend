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
    phoneNumber,
    countryStateId,
    zipCode,
    cityId,
    district,
    address,
    complement,
    userId,
    user,
  }: ICreatePeopleDTO): Promise<void> {
    const person = this.repository.create({
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
    });

    await this.repository.save(person);
  }

  async update({
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
  }: ICreatePeopleDTO): Promise<void> {
    const person = this.repository.create({
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
    });

    await this.repository.save(person);
  }

  async findByCpf(cpf: string): Promise<Person> {
    const person = await this.repository.findOne({ where: { cpf } });

    return person;
  }

  async findByUserId(userId: string): Promise<Person> {
    const person = await this.repository.findOne({
      where: {
        userId,
      },
    });

    return person;
  }

  async list(): Promise<Person[]> {
    const people = await this.repository.find();

    return people;
  }
}

export default PeopleRepository;
