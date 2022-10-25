import { IUsersRepository } from 'repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';
import User from 'infra/typeorm/entities/User';

@injectable()
class FindUserByUsernameUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(username: string): Promise<User> {
    const user = await this.usersRepository.findByUsername(username);

    return user;
  }
}

export default FindUserByUsernameUseCase;
