import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FindPersonByCpfUseCase from './FindPersonByCpfUseCase';

class FindPersonByCpfController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.params;

    const findPersonByCpfUseCase = container.resolve(FindPersonByCpfUseCase);

    const person = await findPersonByCpfUseCase.execute(cpf);

    return response.json(person);
  }
}

export default FindPersonByCpfController;
