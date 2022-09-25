import ProfessionalSpecialty from 'infra/typeorm/entities/ProfessionalSpecialty';
import { IProfessionalsSpecialtiesRepository } from 'repositories/IProfessionalsSpecialtiesRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class FindProfessionalsSpecialtiesBySpecialtyIdUseCase {
  constructor(
    @inject('ProfessionalsSpecialtiesRepository')
    private professionalsSpecialtiesRepository: IProfessionalsSpecialtiesRepository,
  ) {}

  async execute(specialty_id: string): Promise<ProfessionalSpecialty[]> {
    const professionalsSpecialties =
      await this.professionalsSpecialtiesRepository.findByCpf(specialty_id);

    return professionalsSpecialties;
  }
}

export default FindProfessionalsSpecialtiesBySpecialtyIdUseCase;
