import { AppError } from '@errors/AppError';
import {
  ICreatePeopleDTO,
  IPeopleRepository,
} from 'repositories/IPeopleRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreatePersonUseCase {
  constructor(
    @inject('PeopleRepository')
    private peopleRepository: IPeopleRepository,
  ) {}

  async execute({
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
    const userEmailAlreadyExists = await this.peopleRepository.findByCpf(cpf);

    if (userEmailAlreadyExists) {
      throw new AppError('Person already exists.');
    }

    await this.peopleRepository.create({
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
  }
}

export default CreatePersonUseCase;
