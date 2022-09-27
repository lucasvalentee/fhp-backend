import { AppError } from '@errors/AppError';
import {
  ICreateProfessionalDTO,
  IProfessionalsRepository,
} from 'repositories/IProfessionalsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateProfessionalUseCase {
  constructor(
    @inject('ProfessionalsRepository')
    private professionalsRepository: IProfessionalsRepository,
  ) {}

  async execute({ personCpf }: ICreateProfessionalDTO): Promise<void> {
    const professional = await this.professionalsRepository.findByCpf(
      personCpf,
    );

    if (professional) {
      throw new AppError('Professional already exists.');
    }

    await this.professionalsRepository.create({
      personCpf,
    });
  }
}

export default CreateProfessionalUseCase;
