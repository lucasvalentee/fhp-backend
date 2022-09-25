import ProfessionalSpecialty from 'infra/typeorm/entities/ProfessionalSpecialty';
import { IProfessionalsSpecialtiesRepository } from 'repositories/IProfessionalsSpecialtiesRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class FindProfessionalsSpecialtiesByCpfUseCase {
  constructor(
    @inject('ProfessionalsSpecialtiesRepository')
    private professionalsSpecialtiesRepository: IProfessionalsSpecialtiesRepository,
  ) {}

  async execute(person_cpf: string): Promise<ProfessionalSpecialty[]> {
    const professionalsSpecialties =
      await this.professionalsSpecialtiesRepository.findByCpf(person_cpf);

    return professionalsSpecialties;
  }
}

export default FindProfessionalsSpecialtiesByCpfUseCase;
