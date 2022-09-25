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
    phone_number,
    country_state_id,
    zip_code,
    city_id,
    district,
    address,
    complement,
    user_id,
  }: ICreatePeopleDTO): Promise<void> {
    const userEmailAlreadyExists = await this.peopleRepository.findByCpf(cpf);

    if (userEmailAlreadyExists) {
      throw new AppError('Person already exists.');
    }

    await this.peopleRepository.create({
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
  }
}

export default CreatePersonUseCase;
