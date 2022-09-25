import Specialty from 'infra/typeorm/entities/Specialty';
import { ISpecialtiesRepository } from 'repositories/ISpecialtiesRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListSpecialtiesUseCase {
  constructor(
    @inject('SpecialtiesRepository')
    private specialtiesRepository: ISpecialtiesRepository,
  ) {}

  async execute(): Promise<Specialty[]> {
    const specialties = await this.specialtiesRepository.list();

    return specialties;
  }
}

export default ListSpecialtiesUseCase;
