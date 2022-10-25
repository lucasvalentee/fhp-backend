import {
  ICreateProfessionalSpecialtyDTO,
  IDeleteProfessionalSpecialtyDTO,
  IProfessionalsSpecialtiesRepository,
} from 'repositories/IProfessionalsSpecialtiesRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class DeleteProfessionalSpecialtyUseCase {
  constructor(
    @inject('ProfessionalsSpecialtiesRepository')
    private professionalsSpecialtiesRepository: IProfessionalsSpecialtiesRepository,
  ) {}

  async execute({
    professionalId,
    specialtyId,
  }: IDeleteProfessionalSpecialtyDTO): Promise<boolean> {
    return await this.professionalsSpecialtiesRepository.delete({
      professionalId,
      specialtyId,
    });
  }
}

export default DeleteProfessionalSpecialtyUseCase;
