import Professional from 'infra/typeorm/entities/Professional';

interface ICreateProfessionalDTO {
  person_cpf: string;
}

interface IProfessionalsRepository {
  create({ person_cpf }: ICreateProfessionalDTO): Promise<void>;

  findByCpf(person_cpf: string): Promise<Professional>;
}

export { IProfessionalsRepository, ICreateProfessionalDTO };
