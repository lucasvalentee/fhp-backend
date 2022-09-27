import { AppError } from '@errors/AppError';
import ProfessionalSpecialtyServiceLocation from 'infra/typeorm/entities/ProfessionalSpecialtyServiceLocation';
import {
  ICreateProfessionalsSpecialtiesServiceLocationsDTO,
  IProfessionalsSpecialtiesServiceLocationsRepository,
} from 'repositories/IProfessionalsSpecialtiesServiceLocationsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateProfessionalSpecialtyServiceLocationUseCase {
  constructor(
    @inject('ProfessionalsSpecialtiesServiceLocationsRepository')
    private professionalsSpecialtiesServiceLocationsRepository: IProfessionalsSpecialtiesServiceLocationsRepository,
  ) {}

  async execute(
    professionalSpecialtyServiceLocation:
      | ProfessionalSpecialtyServiceLocation
      | ProfessionalSpecialtyServiceLocation[],
  ): Promise<void> {
    if (!Array.isArray(professionalSpecialtyServiceLocation)) {
      professionalSpecialtyServiceLocation = [
        professionalSpecialtyServiceLocation,
      ];
    }

    if (
      !professionalSpecialtyServiceLocation.every(
        data =>
          Object.prototype.hasOwnProperty.call(data, 'serviceLocationId') &&
          Object.prototype.hasOwnProperty.call(data, 'specialtyId') &&
          Object.prototype.hasOwnProperty.call(data, 'personCpf') &&
          Object.prototype.hasOwnProperty.call(data, 'professionalId'),
      )
    ) {
      throw new AppError('Invalid data');
    }

    professionalSpecialtyServiceLocation.forEach(
      async ({ serviceLocationId, specialtyId, personCpf, professionalId }) => {
        const isServiceLocationDuplicated =
          await this.professionalsSpecialtiesServiceLocationsRepository.isServiceLocationDuplicatedForSpecialty(
            serviceLocationId,
            specialtyId,
            personCpf,
            professionalId,
          );

        if (isServiceLocationDuplicated) {
          throw new AppError(
            'The service location already exists for this specialty.',
          );
        }
      },
    );

    await this.professionalsSpecialtiesServiceLocationsRepository.create(
      professionalSpecialtyServiceLocation,
    );
  }
}

export default CreateProfessionalSpecialtyServiceLocationUseCase;
