import { AppError } from '@errors/AppError';
import ProfessionalSpecialtyPaymentMethod from 'infra/typeorm/entities/ProfessionalSpecialtyPaymentMethod';
import { IProfessionalsSpecialtiesPaymentMethodsRepository } from 'repositories/IProfessionalsSpecialtiesPaymentMethodsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateProfessionalSpecialtyPaymentMethodUseCase {
  constructor(
    @inject('ProfessionalsSpecialtiesPaymentMethodsRepository')
    private professionalsSpecialtiesPaymentMethodsRepository: IProfessionalsSpecialtiesPaymentMethodsRepository,
  ) {}

  async execute(
    professionalSpecialtyPaymentMethod:
      | ProfessionalSpecialtyPaymentMethod
      | ProfessionalSpecialtyPaymentMethod[],
  ): Promise<void> {
    if (!Array.isArray(professionalSpecialtyPaymentMethod)) {
      professionalSpecialtyPaymentMethod = [professionalSpecialtyPaymentMethod];
    }

    console.log(professionalSpecialtyPaymentMethod);

    if (
      !professionalSpecialtyPaymentMethod.every(
        data =>
          Object.prototype.hasOwnProperty.call(data, 'paymentMethodId') &&
          Object.prototype.hasOwnProperty.call(data, 'specialtyId') &&
          Object.prototype.hasOwnProperty.call(data, 'personCpf') &&
          Object.prototype.hasOwnProperty.call(data, 'professionalId'),
      )
    ) {
      throw new AppError('Invalid data');
    }

    professionalSpecialtyPaymentMethod.forEach(
      async ({ paymentMethodId, specialtyId, personCpf, professionalId }) => {
        const isPaymentMethodDuplicated =
          await this.professionalsSpecialtiesPaymentMethodsRepository.isPaymentMethodDuplicatedForSpecialty(
            paymentMethodId,
            specialtyId,
            personCpf,
            professionalId,
          );

        if (isPaymentMethodDuplicated) {
          throw new AppError(
            'The payment method already exists for this specialty.',
          );
        }
      },
    );

    await this.professionalsSpecialtiesPaymentMethodsRepository.create(
      professionalSpecialtyPaymentMethod,
    );
  }
}

export default CreateProfessionalSpecialtyPaymentMethodUseCase;
