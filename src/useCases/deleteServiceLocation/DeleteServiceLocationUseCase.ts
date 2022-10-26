import { IProfessionalsSpecialtiesServiceLocationsRepository } from 'repositories/IProfessionalsSpecialtiesServiceLocationsRepository';
import { IServiceLocationsRepository } from 'repositories/IServiceLocationsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class DeleteServiceLocationUseCase {
  constructor(
    @inject('ServiceLocationsRepository')
    private serviceLocationsRepository: IServiceLocationsRepository,
    @inject('ProfessionalsSpecialtiesServiceLocationsRepository')
    private professionalsSpecialtiesServiceLocationsRepository: IProfessionalsSpecialtiesServiceLocationsRepository,
  ) {}

  async execute(id: string): Promise<boolean> {
    if (
      await this.professionalsSpecialtiesServiceLocationsRepository.deleteByServiceLocation(
        id,
      )
    ) {
      return await this.serviceLocationsRepository.delete(id);
    }

    return false;
  }
}

export default DeleteServiceLocationUseCase;
