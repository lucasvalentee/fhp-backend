import Professional from 'infra/typeorm/entities/Professional';
import { IProfessionalsRepository } from 'repositories/IProfessionalsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class FindProfessionalByCpfUseCase {
  constructor(
    @inject('ProfessionalsRepository')
    private professionalsRepository: IProfessionalsRepository,
  ) {}

  async execute(cpf: string): Promise<Professional> {
    const professional = await this.professionalsRepository.findByCpf(cpf);

    return professional;
  }
}

export default FindProfessionalByCpfUseCase;
