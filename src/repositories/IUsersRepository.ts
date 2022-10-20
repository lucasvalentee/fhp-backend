import User from 'infra/typeorm/entities/User';

interface ICreateUserDTO {
  username: string;
  password: string;
}

interface ISession {
  user: User;
  token: string;
  personCpf: string;
}

interface IUsersRepository {
  create({ username, password }: ICreateUserDTO): Promise<void>;

  createSession(user: User, personCpf?: string): Promise<ISession>;

  findByUsername(username: string): Promise<User>;

  findById(id: string): Promise<User>;
}

export { IUsersRepository, ICreateUserDTO, ISession };
