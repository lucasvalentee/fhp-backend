import ProfessionalSpecialty from 'infra/typeorm/entities/ProfessionalSpecialty';
import ProfessionalSpecialtyServiceLocation from 'infra/typeorm/entities/ProfessionalSpecialtyServiceLocation';

interface ICreateProfessionalSpecialtyDTO {
  personCpf: string;
  professionalId: string;
  specialtyId: string;
  registerNumber: string;
  classEntity: string;
}

interface IProfessionalsSpecialtiesRepository {
  create({
    personCpf,
    professionalId,
    specialtyId,
    registerNumber,
    classEntity,
  }: ICreateProfessionalSpecialtyDTO): Promise<void>;

  findByCpf(personCpf: string): Promise<ProfessionalSpecialty[]>;

  findBySpecialtyId(specialtyId: string): Promise<ProfessionalSpecialty[]>;
}

export { IProfessionalsSpecialtiesRepository, ICreateProfessionalSpecialtyDTO };
