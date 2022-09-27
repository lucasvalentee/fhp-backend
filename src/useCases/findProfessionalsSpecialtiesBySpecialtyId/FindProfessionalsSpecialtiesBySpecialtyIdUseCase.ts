import ProfessionalSpecialty from 'infra/typeorm/entities/ProfessionalSpecialty';
import { IProfessionalsSpecialtiesRepository } from 'repositories/IProfessionalsSpecialtiesRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class FindProfessionalsSpecialtiesBySpecialtyIdUseCase {
  constructor(
    @inject('ProfessionalsSpecialtiesRepository')
    private professionalsSpecialtiesRepository: IProfessionalsSpecialtiesRepository,
  ) {}

  async execute(specialtyId: string): Promise<ProfessionalSpecialty[]> {
    const professionalsSpecialties =
      await this.professionalsSpecialtiesRepository.findBySpecialtyId(
        specialtyId,
      );

    return professionalsSpecialties;
  }
}

export default FindProfessionalsSpecialtiesBySpecialtyIdUseCase;
