import { IPeopleRepository } from 'repositories/IPeopleRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListPeopleUseCase {
  constructor(
    @inject('PeopleRepository')
    private peopleRepository: IPeopleRepository,
  ) {}

  async execute() {
    const people = await this.peopleRepository.list();

    return people;
  }
}

export default ListPeopleUseCase;
