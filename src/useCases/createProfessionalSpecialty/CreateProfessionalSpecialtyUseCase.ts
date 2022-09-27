import {
  ICreateProfessionalSpecialtyDTO,
  IProfessionalsSpecialtiesRepository,
} from 'repositories/IProfessionalsSpecialtiesRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateProfessionalSpecialtyUseCase {
  constructor(
    @inject('ProfessionalsSpecialtiesRepository')
    private professionalsSpecialtiesRepository: IProfessionalsSpecialtiesRepository,
  ) {}

  async execute({
    personCpf,
    professionalId,
    specialtyId,
    registerNumber,
    classEntity,
  }: ICreateProfessionalSpecialtyDTO): Promise<void> {
    await this.professionalsSpecialtiesRepository.create({
      personCpf,
      professionalId,
      specialtyId,
      registerNumber,
      classEntity,
    });
  }
}

export default CreateProfessionalSpecialtyUseCase;
