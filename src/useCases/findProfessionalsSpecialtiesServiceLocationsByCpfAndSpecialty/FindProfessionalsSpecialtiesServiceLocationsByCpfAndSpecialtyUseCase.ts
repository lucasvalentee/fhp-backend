import ProfessionalSpecialtyServiceLocation from 'infra/typeorm/entities/ProfessionalSpecialtyServiceLocation';
import { IProfessionalsSpecialtiesServiceLocationsRepository } from 'repositories/IProfessionalsSpecialtiesServiceLocationsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class FindProfessionalsSpecialtiesServiceLocationsByCpfAndSpecialtyUseCase {
  constructor(
    @inject('ProfessionalsSpecialtiesServiceLocationsRepository')
    private professionalsSpecialtiesServiceLocationsRepository: IProfessionalsSpecialtiesServiceLocationsRepository,
  ) {}

  async execute(
    personCpf: string,
    specialtyId: string,
  ): Promise<ProfessionalSpecialtyServiceLocation[]> {
    const professionalsSpecialtiesServiceLocations =
      await this.professionalsSpecialtiesServiceLocationsRepository.findByCpfAndSpecialty(
        personCpf,
        specialtyId,
      );

    return professionalsSpecialtiesServiceLocations;
  }
}

export default FindProfessionalsSpecialtiesServiceLocationsByCpfAndSpecialtyUseCase;
