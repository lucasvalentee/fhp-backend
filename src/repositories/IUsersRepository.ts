import User from 'infra/typeorm/entities/User';

interface ICreateUserDTO {
  username: string;
  password: string;
}

interface IUsersRepository {
  create({ username, password }: ICreateUserDTO): Promise<void>;

  findByUsername(username: string): Promise<User>;

  findById(id: string): Promise<User>;
}

export { IUsersRepository, ICreateUserDTO };
