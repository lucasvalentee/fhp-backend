import DatabaseConfiguration from '@database/DatabaseConfiguration';
import {
  ICreateProfessionalSpecialtyDTO,
  IProfessionalsSpecialtiesRepository,
} from 'repositories/IProfessionalsSpecialtiesRepository';
import { Repository } from 'typeorm';
import ProfessionalSpecialty from '../entities/ProfessionalSpecialty';

class ProfessionalsSpecialtiesRepository
  implements IProfessionalsSpecialtiesRepository
{
  private repository: Repository<ProfessionalSpecialty>;

  constructor() {
    this.repository =
      DatabaseConfiguration.getDataSourceInstance().getRepository(
        ProfessionalSpecialty,
      );
  }

  async create({
    person_cpf,
    professional_id,
    specialty_id,
    register_number,
    class_entity,
  }: ICreateProfessionalSpecialtyDTO): Promise<void> {
    const professionalSpecialty = this.repository.create({
      person_cpf,
      professional_id,
      specialty_id,
      register_number,
      class_entity,
    });

    await this.repository.save(professionalSpecialty);
  }

  async findByCpf(person_cpf: string): Promise<ProfessionalSpecialty[]> {
    const professionalsSpecialties = await this.repository.findBy({
      person_cpf,
    });

    return professionalsSpecialties;
  }

  async findBySpecialtyId(
    specialty_id: string,
  ): Promise<ProfessionalSpecialty[]> {
    const professionalsSpecialties = await this.repository.findBy({
      specialty_id,
    });

    return professionalsSpecialties;
  }
}

export default ProfessionalsSpecialtiesRepository;
