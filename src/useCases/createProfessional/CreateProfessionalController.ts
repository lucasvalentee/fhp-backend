import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateProfessionalUseCase from './CreateProfessionalUseCase';

class CreateProfessionalController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { person_cpf } = request.body;

    const createProfessionalUseCase = container.resolve(
      CreateProfessionalUseCase,
    );

    await createProfessionalUseCase.execute({ person_cpf });

    return response.status(201).send();
  }
}

export default CreateProfessionalController;
