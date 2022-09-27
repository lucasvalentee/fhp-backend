import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FindProfessionalsSpecialtiesByCpfUseCase from './FindProfessionalsSpecialtiesByCpfUseCase';

class FindProfessionalsSpecialtiesByCpfController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { personCpf } = request.params;

    const findProfessionalsSpecialtiesByCpfUseCase = container.resolve(
      FindProfessionalsSpecialtiesByCpfUseCase,
    );

    const professionalsSpecialties =
      await findProfessionalsSpecialtiesByCpfUseCase.execute(personCpf);

    return response.json(professionalsSpecialties);
  }
}

export default FindProfessionalsSpecialtiesByCpfController;
