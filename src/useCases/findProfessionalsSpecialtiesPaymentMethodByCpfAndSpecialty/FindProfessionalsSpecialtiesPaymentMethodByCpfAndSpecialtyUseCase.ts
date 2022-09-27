import ProfessionalSpecialtyPaymentMethod from 'infra/typeorm/entities/ProfessionalSpecialtyPaymentMethod';
import { IProfessionalsSpecialtiesPaymentMethodsRepository } from 'repositories/IProfessionalsSpecialtiesPaymentMethodsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class FindProfessionalsSpecialtiesPaymentMethodByCpfAndSpecialtyUseCase {
  constructor(
    @inject('ProfessionalsSpecialtiesPaymentMethodsRepository')
    private professionalsSpecialtiesPaymentMethodsRepository: IProfessionalsSpecialtiesPaymentMethodsRepository,
  ) {}

  async execute(
    personCpf: string,
    specialtyId: string,
  ): Promise<ProfessionalSpecialtyPaymentMethod[]> {
    const professionalsSpecialtiesPaymentMethods =
      await this.professionalsSpecialtiesPaymentMethodsRepository.findByCpfAndSpecialty(
        personCpf,
        specialtyId,
      );

    return professionalsSpecialtiesPaymentMethods;
  }
}

export default FindProfessionalsSpecialtiesPaymentMethodByCpfAndSpecialtyUseCase;
