import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateProfessionalSpecialtyUseCase from './CreateProfessionalSpecialtyUseCase';

class CreateProfessionalSpecialtyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      person_cpf,
      professional_id,
      specialty_id,
      register_number,
      class_entity,
    } = request.body;

    const createProfessionalSpecialtyUseCase = container.resolve(
      CreateProfessionalSpecialtyUseCase,
    );

    await createProfessionalSpecialtyUseCase.execute({
      person_cpf,
      professional_id,
      specialty_id,
      register_number,
      class_entity,
    });

    return response.status(201).send();
  }
}

export default CreateProfessionalSpecialtyController;
