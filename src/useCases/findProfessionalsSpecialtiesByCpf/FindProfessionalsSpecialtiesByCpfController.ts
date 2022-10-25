import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FindProfessionalsSpecialtiesByCpfUseCase from './FindProfessionalsSpecialtiesByCpfUseCase';

class FindProfessionalsSpecialtiesByCpfController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.params;

    const findProfessionalsSpecialtiesByCpfUseCase = container.resolve(
      FindProfessionalsSpecialtiesByCpfUseCase,
    );

    const professionalsSpecialties =
      await findProfessionalsSpecialtiesByCpfUseCase.execute(cpf);

    return response.json(professionalsSpecialties);
  }
}

export default FindProfessionalsSpecialtiesByCpfController;
