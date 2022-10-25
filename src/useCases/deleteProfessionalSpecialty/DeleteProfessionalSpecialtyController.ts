import { Request, Response } from 'express';
import { container } from 'tsyringe';
import DeleteProfessionalSpecialtyUseCase from './DeleteProfessionalSpecialtyUseCase';

class DeleteProfessionalSpecialtyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { professionalId, specialtyId } = request.params;

    const deleteProfessionalSpecialtyUseCase = container.resolve(
      DeleteProfessionalSpecialtyUseCase,
    );

    const deleted = await deleteProfessionalSpecialtyUseCase.execute({
      professionalId,
      specialtyId,
    });

    return response.status(deleted ? 200 : 400).send();
  }
}

export default DeleteProfessionalSpecialtyController;
