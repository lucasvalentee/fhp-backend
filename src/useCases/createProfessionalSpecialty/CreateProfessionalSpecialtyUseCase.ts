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
    person_cpf,
    professional_id,
    specialty_id,
    register_number,
    class_entity,
  }: ICreateProfessionalSpecialtyDTO): Promise<void> {
    await this.professionalsSpecialtiesRepository.create({
      person_cpf,
      professional_id,
      specialty_id,
      register_number,
      class_entity,
    });
  }
}

export default CreateProfessionalSpecialtyUseCase;
