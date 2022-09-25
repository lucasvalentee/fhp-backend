import PeopleRepository from 'infra/typeorm/repositories/PeopleRepository';
import UsersRepository from 'infra/typeorm/repositories/UsersRepository';
import { IPeopleRepository } from 'repositories/IPeopleRepository';
import { IUsersRepository } from 'repositories/IUsersRepository';
import { container } from 'tsyringe';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IPeopleRepository>(
  'PeopleRepository',
  PeopleRepository,
);
