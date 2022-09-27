import ProfessionalSpecialtyServiceLocation from 'infra/typeorm/entities/ProfessionalSpecialtyServiceLocation';

interface ICreateProfessionalsSpecialtiesServiceLocationsDTO {
  professionalId: string;
  personCpf: string;
  specialtyId: string;
  serviceLocationId: string;
}

interface IProfessionalsSpecialtiesServiceLocationsRepository {
  create(
    professionalSpecialtyServiceLocation:
      | ProfessionalSpecialtyServiceLocation
      | ProfessionalSpecialtyServiceLocation[],
  ): Promise<void>;

  findByCpfAndSpecialty(
    personCpf: string,
    specialtyId: string,
  ): Promise<ProfessionalSpecialtyServiceLocation[]>;

  isServiceLocationDuplicatedForSpecialty(
    serviceLocationId: string,
    specialtyId: string,
    personCpf: string,
    professionalId: string,
  ): Promise<boolean>;
}

export {
  IProfessionalsSpecialtiesServiceLocationsRepository,
  ICreateProfessionalsSpecialtiesServiceLocationsDTO,
};
