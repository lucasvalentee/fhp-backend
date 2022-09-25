import Person from 'infra/typeorm/entities/Person';
import { IPeopleRepository } from 'repositories/IPeopleRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class FindPersonByCpfUseCase {
  constructor(
    @inject('PeopleRepository')
    private peopleRepository: IPeopleRepository,
  ) {}

  async execute(cpf: string): Promise<Person> {
    const people = await this.peopleRepository.findByCpf(cpf);

    return people;
  }
}

export default FindPersonByCpfUseCase;
