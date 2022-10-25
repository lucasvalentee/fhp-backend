import DatabaseConfiguration from '@database/DatabaseConfiguration';
import {
  ICreateProfessionalSpecialtyDTO,
  IDeleteProfessionalSpecialtyDTO,
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
    personCpf,
    professionalId,
    specialtyId,
    registerNumber,
    classEntity,
  }: ICreateProfessionalSpecialtyDTO): Promise<void> {
    const professionalSpecialty = this.repository.create({
      personCpf,
      professionalId,
      specialtyId,
      registerNumber,
      classEntity,
    });

    await this.repository.save(professionalSpecialty);
  }

  async delete({
    professionalId,
    specialtyId,
  }: IDeleteProfessionalSpecialtyDTO): Promise<boolean> {
    const response = await this.repository.delete({
      professionalId,
      specialtyId,
    });

    return !!response.affected;
  }

  async findByCpf(personCpf: string): Promise<ProfessionalSpecialty[]> {
    const professionalsSpecialties = await this.repository.find({
      where: { personCpf },
      order: { createdAt: 'ASC' },
    });

    return professionalsSpecialties;
  }

  async findBySpecialtyId(
    specialtyId: string,
  ): Promise<ProfessionalSpecialty[]> {
    const professionalsSpecialties = await this.repository.find({
      where: {
        specialtyId,
      },
      relations: ['specialty', 'professionalsSpecialtiesServiceLocations'],
    });

    return professionalsSpecialties;
  }
}

export default ProfessionalsSpecialtiesRepository;
