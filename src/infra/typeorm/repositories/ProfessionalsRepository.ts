import DatabaseConfiguration from '@database/DatabaseConfiguration';
import {
  ICreateProfessionalDTO,
  IProfessionalsRepository,
} from 'repositories/IProfessionalsRepository';
import { Repository } from 'typeorm';
import Professional from '../entities/Professional';

class ProfessionalsRepository implements IProfessionalsRepository {
  private repository: Repository<Professional>;

  constructor() {
    this.repository =
      DatabaseConfiguration.getDataSourceInstance().getRepository(Professional);
  }

  async create({ person_cpf }: ICreateProfessionalDTO): Promise<void> {
    const professional = this.repository.create({
      person_cpf,
    });

    await this.repository.save(professional);
  }

  async findByCpf(person_cpf: string): Promise<Professional> {
    const professional = await this.repository.findOne({
      where: { person_cpf },
    });

    return professional;
  }
}

export default ProfessionalsRepository;
