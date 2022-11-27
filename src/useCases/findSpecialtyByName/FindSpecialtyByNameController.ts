import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FindSpecialtyByNameUseCase from './FindSpecialtyByNameUseCase';

class FindSpecialtyByNameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.params;

    const findSpecialtyByNameUseCase = container.resolve(
      FindSpecialtyByNameUseCase,
    );

    const specialty = await findSpecialtyByNameUseCase.execute(name);

    return response.json(specialty);
  }
}

export default FindSpecialtyByNameController;
