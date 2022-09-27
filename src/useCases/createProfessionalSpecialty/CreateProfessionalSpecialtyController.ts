import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateProfessionalSpecialtyUseCase from './CreateProfessionalSpecialtyUseCase';

class CreateProfessionalSpecialtyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      personCpf,
      professionalId,
      specialtyId,
      registerNumber,
      classEntity,
    } = request.body;

    const createProfessionalSpecialtyUseCase = container.resolve(
      CreateProfessionalSpecialtyUseCase,
    );

    await createProfessionalSpecialtyUseCase.execute({
      personCpf,
      professionalId,
      specialtyId,
      registerNumber,
      classEntity,
    });

    return response.status(201).send();
  }
}

export default CreateProfessionalSpecialtyController;
