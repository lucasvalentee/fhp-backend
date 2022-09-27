import { Repository } from 'typeorm';
import DatabaseConfiguration from '@database/DatabaseConfiguration';
import { IProfessionalsSpecialtiesPaymentMethodsRepository } from 'repositories/IProfessionalsSpecialtiesPaymentMethodsRepository';
import ProfessionalSpecialtyPaymentMethod from '../entities/ProfessionalSpecialtyPaymentMethod';

class ProfessionalsSpecialtiesPaymentMethodsRepository
  implements IProfessionalsSpecialtiesPaymentMethodsRepository
{
  private repository: Repository<ProfessionalSpecialtyPaymentMethod>;

  constructor() {
    this.repository =
      DatabaseConfiguration.getDataSourceInstance().getRepository(
        ProfessionalSpecialtyPaymentMethod,
      );
  }

  async create(
    professionalSpecialtyPaymentMethod:
      | ProfessionalSpecialtyPaymentMethod
      | ProfessionalSpecialtyPaymentMethod[],
  ): Promise<void> {
    if (!Array.isArray(professionalSpecialtyPaymentMethod)) {
      professionalSpecialtyPaymentMethod = [professionalSpecialtyPaymentMethod];
    }

    const data = this.repository.create(professionalSpecialtyPaymentMethod);

    await this.repository.save(data);
  }

  async findByCpfAndSpecialty(
    personCpf: string,
    specialtyId: string,
  ): Promise<ProfessionalSpecialtyPaymentMethod[]> {
    const professionalsSpecialtiesPaymentMethods = await this.repository.find({
      where: { personCpf, specialtyId },
      relations: ['paymentMethod'],
    });

    return professionalsSpecialtiesPaymentMethods;
  }

  async isPaymentMethodDuplicatedForSpecialty(
    paymentMethodId: number,
    specialtyId: string,
    personCpf: string,
    professionalId: string,
  ): Promise<boolean> {
    const professionalsSpecialtiesPaymentMethods =
      await this.repository.findOne({
        where: { personCpf, specialtyId, professionalId, paymentMethodId },
      });

    return !!professionalsSpecialtiesPaymentMethods;
  }
}

export default ProfessionalsSpecialtiesPaymentMethodsRepository;
