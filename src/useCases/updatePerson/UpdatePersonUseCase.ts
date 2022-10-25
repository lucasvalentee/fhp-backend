import {
  IUpdatePeopleDTO,
  IPeopleRepository,
} from 'repositories/IPeopleRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class UpdatePersonUseCase {
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
  }: IUpdatePeopleDTO): Promise<void> {
    await this.peopleRepository.update({
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

export default UpdatePersonUseCase;
