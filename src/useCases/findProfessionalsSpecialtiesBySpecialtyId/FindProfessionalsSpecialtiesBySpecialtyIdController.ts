import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FindProfessionalsSpecialtiesBySpecialtyIdUseCase from './FindProfessionalsSpecialtiesBySpecialtyIdUseCase';

class FindProfessionalsSpecialtiesBySpecialtyIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { specialtyId } = request.params;

    const findProfessionalsSpecialtiesBySpecialtyIdUseCase = container.resolve(
      FindProfessionalsSpecialtiesBySpecialtyIdUseCase,
    );

    const professionalsSpecialties =
      await findProfessionalsSpecialtiesBySpecialtyIdUseCase.execute(
        specialtyId,
      );

    return response.json(professionalsSpecialties);
  }
}

export default FindProfessionalsSpecialtiesBySpecialtyIdController;
