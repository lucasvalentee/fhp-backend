import { inject, injectable } from 'tsyringe';
import {
  ICreateUserDTO,
  ISession,
  IUsersRepository,
} from 'repositories/IUsersRepository';
import { AppError } from '@errors/AppError';
import { compare } from 'bcrypt';
import { IPeopleRepository } from 'repositories/IPeopleRepository';

@injectable()
class CreateSessionUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('PeopleRepository')
    private peopleRepository: IPeopleRepository,
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

    const person = await this.peopleRepository.findByUserId(user.id);

    return await this.usersRepository.createSession(user, person?.cpf);
  }
}

export default CreateSessionUseCase;
