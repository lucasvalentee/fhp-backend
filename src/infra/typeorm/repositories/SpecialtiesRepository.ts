import DatabaseConfiguration from '@database/DatabaseConfiguration';
import { ISpecialtiesRepository } from 'repositories/ISpecialtiesRepository';
import { ILike, Repository } from 'typeorm';
import Specialty from '../entities/Specialty';

class SpecialtiesRepository implements ISpecialtiesRepository {
  private repository: Repository<Specialty>;

  constructor() {
    this.repository =
      DatabaseConfiguration.getDataSourceInstance().getRepository(Specialty);
  }

  async findById(id: string): Promise<Specialty> {
    const specialty = await this.repository.findOne({ where: { id } });

    return specialty;
  }

  async list(): Promise<Specialty[]> {
    const specialties = await this.repository.find();

    return specialties;
  }

  async findByName(name: string): Promise<Specialty> {
    return await this.repository.findOne({
      where: {
        description: ILike(`%${name}%`),
      },
    });
  }
}

export default SpecialtiesRepository;
