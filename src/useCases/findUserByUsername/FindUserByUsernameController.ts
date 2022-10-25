import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FindUserByUsernameUseCase from './FindUserByUsernameUseCase';

class FindUserByUsernameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username } = request.params;

    const findUserByUsernameUseCase = container.resolve(
      FindUserByUsernameUseCase,
    );

    const user = await findUserByUsernameUseCase.execute(username);

    delete user.password;
    delete user.createdAt;

    return response.json(user);
  }
}

export default FindUserByUsernameController;
