import { inject, injectable } from 'tsyringe';
import {
  ICreateUserDTO,
  ISession,
  IUsersRepository,
} from 'repositories/IUsersRepository';
import { AppError } from '@errors/AppError';
import { compare } from 'bcrypt';

@injectable()
class CreateSessionUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ username, password }: ICreateUserDTO): Promise<ISession> {
    const user = await this.usersRepository.findByUsername(username);

    if (!user) {
      throw new AppError('Incorrect username/password combination.', 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('Incorrect username/password combination.', 401);
    }

    return await this.usersRepository.createSession(user);
  }
}

export default CreateSessionUseCase;
