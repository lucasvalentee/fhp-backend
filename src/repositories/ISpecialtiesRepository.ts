import Specialty from 'infra/typeorm/entities/Specialty';

interface ISpecialtiesRepository {
  findById(id: string): Promise<Specialty>;

  list(): Promise<Specialty[]>;

  findByName(name: string): Promise<Specialty>;
}

export { ISpecialtiesRepository };
