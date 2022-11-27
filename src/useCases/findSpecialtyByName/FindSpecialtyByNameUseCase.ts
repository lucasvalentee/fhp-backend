import Specialty from 'infra/typeorm/entities/Specialty';
import { ISpecialtiesRepository } from 'repositories/ISpecialtiesRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class FindSpecialtyByNameUseCase {
  constructor(
    @inject('SpecialtiesRepository')
    private specialtiesRepository: ISpecialtiesRepository,
  ) {}

  async execute(name: string): Promise<Specialty> {
    const specialties = await this.specialtiesRepository.findByName(name);

    return specialties;
  }
}

export default FindSpecialtyByNameUseCase;
