import PaymentMethodsRepository from 'infra/typeorm/repositories/PaymentMethodsRepository';
import PeopleRepository from 'infra/typeorm/repositories/PeopleRepository';
import ProfessionalsRepository from 'infra/typeorm/repositories/ProfessionalsRepository';
import ProfessionalsSpecialtiesRepository from 'infra/typeorm/repositories/ProfessionalsSpecialtiesRepository';
import ServiceLocationsRepository from 'infra/typeorm/repositories/ServiceLocationsRepository';
import SpecialtiesRepository from 'infra/typeorm/repositories/SpecialtiesRepository';
import UsersRepository from 'infra/typeorm/repositories/UsersRepository';
import { IPaymentMethodsRepository } from 'repositories/IPaymentMethodsRepository';
import { IPeopleRepository } from 'repositories/IPeopleRepository';
import { IProfessionalsRepository } from 'repositories/IProfessionalsRepository';
import { IProfessionalsSpecialtiesRepository } from 'repositories/IProfessionalsSpecialtiesRepository';
import { IServiceLocationsRepository } from 'repositories/IServiceLocationsRepository';
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

container.registerSingleton<IPaymentMethodsRepository>(
  'PaymentMethodsRepository',
  PaymentMethodsRepository,
);

container.registerSingleton<IServiceLocationsRepository>(
  'ServiceLocationsRepository',
  ServiceLocationsRepository,
);

container.registerSingleton<IProfessionalsSpecialtiesRepository>(
  'ProfessionalsSpecialtiesRepository',
  ProfessionalsSpecialtiesRepository,
);
