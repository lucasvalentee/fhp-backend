import ProfessionalSpecialtyServiceLocation from 'infra/typeorm/entities/ProfessionalSpecialtyServiceLocation';
import { IProfessionalsSpecialtiesServiceLocationsRepository } from 'repositories/IProfessionalsSpecialtiesServiceLocationsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class FindProfessionalsSpecialtiesServiceLocationsByProfessionalUseCase {
  constructor(
    @inject('ProfessionalsSpecialtiesServiceLocationsRepository')
    private professionalsSpecialtiesServiceLocationsRepository: IProfessionalsSpecialtiesServiceLocationsRepository,
  ) {}

  async execute(
    professionalId: string,
  ): Promise<ProfessionalSpecialtyServiceLocation[]> {
    const professionalsSpecialtiesServiceLocations =
      await this.professionalsSpecialtiesServiceLocationsRepository.findByProfessional(
        professionalId,
      );

    return professionalsSpecialtiesServiceLocations;
  }
}

export default FindProfessionalsSpecialtiesServiceLocationsByProfessionalUseCase;
