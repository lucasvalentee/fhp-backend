import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateProfessionalSpecialtyServiceLocationUseCase from './CreateProfessionalSpecialtyServiceLocationUseCase';

class CreateProfessionalSpecialtyServiceLocationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const professionalSpecialtyServiceLocation = request.body;

    const createProfessionalSpecialtyServiceLocationUseCase = container.resolve(
      CreateProfessionalSpecialtyServiceLocationUseCase,
    );

    await createProfessionalSpecialtyServiceLocationUseCase.execute(
      professionalSpecialtyServiceLocation,
    );

    return response.status(201).send();
  }
}

export default CreateProfessionalSpecialtyServiceLocationController;
