import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FindUserByIdUseCase from './FindUserByIdUseCase';

class FindUserByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findUserByIdUseCase = container.resolve(FindUserByIdUseCase);

    const user = await findUserByIdUseCase.execute(id);

    delete user.password;

    return response.json(user);
  }
}

export default FindUserByIdController;
