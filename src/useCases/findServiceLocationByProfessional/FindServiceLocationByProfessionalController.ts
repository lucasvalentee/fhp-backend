import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FindServiceLocationByProfessionalUseCase from './FindServiceLocationByProfessionalUseCase';

class FindServiceLocationByProfessionalController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { professionalId } = request.params;

    const findServiceLocationByProfessionalUseCase = container.resolve(
      FindServiceLocationByProfessionalUseCase,
    );

    const serviceLocations =
      await findServiceLocationByProfessionalUseCase.execute(professionalId);

    return response.json(serviceLocations);
  }
}

export default FindServiceLocationByProfessionalController;
