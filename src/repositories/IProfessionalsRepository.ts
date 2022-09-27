import Professional from 'infra/typeorm/entities/Professional';

interface ICreateProfessionalDTO {
  personCpf: string;
}

interface IProfessionalsRepository {
  create({ personCpf }: ICreateProfessionalDTO): Promise<void>;

  findByCpf(personCpf: string): Promise<Professional>;
}

export { IProfessionalsRepository, ICreateProfessionalDTO };
