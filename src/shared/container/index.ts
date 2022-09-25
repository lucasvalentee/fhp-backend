import PeopleRepository from 'infra/typeorm/repositories/PeopleRepository';
import ProfessionalsRepository from 'infra/typeorm/repositories/ProfessionalsRepository';
import SpecialtiesRepository from 'infra/typeorm/repositories/SpecialtiesRepository';
import UsersRepository from 'infra/typeorm/repositories/UsersRepository';
import { IPeopleRepository } from 'repositories/IPeopleRepository';
import { IProfessionalsRepository } from 'repositories/IProfessionalsRepository';
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

container.registerSingleton<IProfessionalsRepository>(
  'ProfessionalsRepository',
  ProfessionalsRepository,
);
