import PeopleRepository from 'infra/typeorm/repositories/PeopleRepository';
import SpecialtiesRepository from 'infra/typeorm/repositories/SpecialtiesRepository';
import UsersRepository from 'infra/typeorm/repositories/UsersRepository';
import { IPeopleRepository } from 'repositories/IPeopleRepository';
import { ISpecialtiesRepository } from 'repositories/ISpecialtiesRepository';
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

container.registerSingleton<ISpecialtiesRepository>(
  'SpecialtiesRepository',
  SpecialtiesRepository,
);
