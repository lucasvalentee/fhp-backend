import Specialty from 'infra/typeorm/entities/Specialty';

interface ISpecialtiesRepository {
  findById(id: string): Promise<Specialty>;

  list(): Promise<Specialty[]>;
}

export { ISpecialtiesRepository };
