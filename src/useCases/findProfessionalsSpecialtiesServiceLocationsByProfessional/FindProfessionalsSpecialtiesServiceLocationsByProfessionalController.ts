import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FindProfessionalsSpecialtiesServiceLocationsByProfessionalUseCase from './FindProfessionalsSpecialtiesServiceLocationsByProfessionalUseCase';

class FindProfessionalsSpecialtiesServiceLocationsByProfessionalController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { professionalId } = request.params;

    const findProfessionalsSpecialtiesServiceLocationsByProfessionalUseCase =
      container.resolve(
        FindProfessionalsSpecialtiesServiceLocationsByProfessionalUseCase,
      );

    const professionalsSpecialtiesServiceLocations =
      await findProfessionalsSpecialtiesServiceLocationsByProfessionalUseCase.execute(
        professionalId,
      );

    return response.json(professionalsSpecialtiesServiceLocations);
  }
}

export default FindProfessionalsSpecialtiesServiceLocationsByProfessionalController;
