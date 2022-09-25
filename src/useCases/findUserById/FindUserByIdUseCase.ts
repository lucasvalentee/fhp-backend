import User from 'infra/typeorm/entities/User';
import { IUsersRepository } from 'repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class FindUserByIdUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(id: string): Promise<User> {
    const user = await this.usersRepository.findById(id);

    return user;
  }
}

export default FindUserByIdUseCase;
