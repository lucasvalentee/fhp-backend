import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FindProfessionalsSpecialtiesServiceLocationsByCpfAndSpecialtyUseCase from './FindProfessionalsSpecialtiesServiceLocationsByCpfAndSpecialtyUseCase';

class FindProfessionalsSpecialtiesServiceLocationsByCpfAndSpecialtyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { personCpf, specialtyId } = request.params;

    const findProfessionalsSpecialtiesServiceLocationsByCpfAndSpecialtyUseCase =
      container.resolve(
        FindProfessionalsSpecialtiesServiceLocationsByCpfAndSpecialtyUseCase,
      );

    const professionalsSpecialtiesServiceLocations =
      await findProfessionalsSpecialtiesServiceLocationsByCpfAndSpecialtyUseCase.execute(
        personCpf,
        specialtyId,
      );

    return response.json(professionalsSpecialtiesServiceLocations);
  }
}

export default FindProfessionalsSpecialtiesServiceLocationsByCpfAndSpecialtyController;
