import { inject, injectable } from 'tsyringe';
import { hash } from 'bcrypt';
import {
  ICreateUserDTO,
  IUsersRepository,
} from 'repositories/IUsersRepository';
import { AppError } from '@errors/AppError';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ username, password }: ICreateUserDTO): Promise<void> {
    const userEmailAlreadyExists = await this.usersRepository.findByUsername(
      username,
    );

    if (userEmailAlreadyExists) {
      throw new AppError('User already exists.');
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      username,
      password: passwordHash,
    });
  }
}

export default CreateUserUseCase;
