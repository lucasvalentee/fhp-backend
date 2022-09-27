import ProfessionalSpecialtyPaymentMethod from 'infra/typeorm/entities/ProfessionalSpecialtyPaymentMethod';

interface IProfessionalsSpecialtiesPaymentMethodsRepository {
  create(
    professionalSpecialtyPaymentMethod:
      | ProfessionalSpecialtyPaymentMethod
      | ProfessionalSpecialtyPaymentMethod[],
  ): Promise<void>;

  findByCpfAndSpecialty(
    personCpf: string,
    specialtyId: string,
  ): Promise<ProfessionalSpecialtyPaymentMethod[]>;

  isPaymentMethodDuplicatedForSpecialty(
    paymentMethodId: number,
    specialtyId: string,
    personCpf: string,
    professionalId: string,
  ): Promise<boolean>;
}

export { IProfessionalsSpecialtiesPaymentMethodsRepository };
