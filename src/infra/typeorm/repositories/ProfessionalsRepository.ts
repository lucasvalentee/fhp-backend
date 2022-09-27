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

  async create({ personCpf }: ICreateProfessionalDTO): Promise<void> {
    const professional = this.repository.create({
      personCpf,
    });

    await this.repository.save(professional);
  }

  async findByCpf(personCpf: string): Promise<Professional> {
    const professional = await this.repository.findOne({
      where: { personCpf },
      relations: ['person'],
    });

    return professional;
  }
}

export default ProfessionalsRepository;
