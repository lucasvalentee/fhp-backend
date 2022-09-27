import DatabaseConfiguration from '@database/DatabaseConfiguration';
import { IProfessionalsSpecialtiesServiceLocationsRepository } from 'repositories/IProfessionalsSpecialtiesServiceLocationsRepository';
import { Repository } from 'typeorm';
import ProfessionalSpecialtyServiceLocation from '../entities/ProfessionalSpecialtyServiceLocation';

class ProfessionalsSpecialtiesServiceLocationsRepository
  implements IProfessionalsSpecialtiesServiceLocationsRepository
{
  private repository: Repository<ProfessionalSpecialtyServiceLocation>;

  constructor() {
    this.repository =
      DatabaseConfiguration.getDataSourceInstance().getRepository(
        ProfessionalSpecialtyServiceLocation,
      );
  }

  async create(
    professionalSpecialtyServiceLocation:
      | ProfessionalSpecialtyServiceLocation
      | ProfessionalSpecialtyServiceLocation[],
  ): Promise<void> {
    if (!Array.isArray(professionalSpecialtyServiceLocation)) {
      professionalSpecialtyServiceLocation = [
        professionalSpecialtyServiceLocation,
      ];
    }

    const data = this.repository.create(professionalSpecialtyServiceLocation);

    await this.repository.save(data);
  }

  async findByCpfAndSpecialty(
    personCpf: string,
    specialtyId: string,
  ): Promise<ProfessionalSpecialtyServiceLocation[]> {
    const professionalsSpecialtiesServiceLocations = await this.repository.find(
      {
        where: { personCpf, specialtyId },
        relations: ['serviceLocation'],
      },
    );

    return professionalsSpecialtiesServiceLocations;
  }

  async isServiceLocationDuplicatedForSpecialty(
    serviceLocationId: string,
    specialtyId: string,
    personCpf: string,
    professionalId: string,
  ): Promise<boolean> {
    const professionalsSpecialtiesServiceLocations =
      await this.repository.findOne({
        where: { personCpf, specialtyId, professionalId, serviceLocationId },
      });

    return !!professionalsSpecialtiesServiceLocations;
  }
}

export default ProfessionalsSpecialtiesServiceLocationsRepository;
