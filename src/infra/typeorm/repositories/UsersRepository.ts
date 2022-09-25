import DatabaseConfiguration from '@database/DatabaseConfiguration';
import {
  ICreateUserDTO,
  IUsersRepository,
} from 'repositories/IUsersRepository';
import { Repository } from 'typeorm';
import User from '../entities/User';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository =
      DatabaseConfiguration.getDataSourceInstance().getRepository(User);
  }

  async create({ username, password }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      username,
      password,
    });

    await this.repository.save(user);
  }

  async findByUsername(username: string): Promise<User> {
    const user = await this.repository.findOne({ where: { username } });

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne({ where: { id } });

    return user;
  }
}

export default UsersRepository;
