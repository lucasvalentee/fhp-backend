import ProfessionalSpecialty from 'infra/typeorm/entities/ProfessionalSpecialty';

interface ICreateProfessionalSpecialtyDTO {
  person_cpf: string;
  professional_id: string;
  specialty_id: string;
  register_number: string;
  class_entity: string;
}

interface IProfessionalsSpecialtiesRepository {
  create({
    person_cpf,
    professional_id,
    specialty_id,
    register_number,
    class_entity,
  }: ICreateProfessionalSpecialtyDTO): Promise<void>;

  findByCpf(person_cpf: string): Promise<ProfessionalSpecialty[]>;

  findBySpecialtyId(specialty_id: string): Promise<ProfessionalSpecialty[]>;
}

export { IProfessionalsSpecialtiesRepository, ICreateProfessionalSpecialtyDTO };
