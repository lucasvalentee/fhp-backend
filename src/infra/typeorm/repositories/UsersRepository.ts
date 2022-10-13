import DatabaseConfiguration from '@database/DatabaseConfiguration';
import {
  ICreateUserDTO,
  ISession,
  IUsersRepository,
} from 'repositories/IUsersRepository';
import { Repository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import User from '../entities/User';
import authConfig from '../../../config/Auth';

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

  async createSession(user: User): Promise<ISession> {
    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    delete user.id;
    delete user.password;
    delete user.isAdmin;
    delete user.createdAt;

    return {
      user,
      token,
    };
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
