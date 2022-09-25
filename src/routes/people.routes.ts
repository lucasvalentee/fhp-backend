import { Router } from 'express';
import CreatePersonController from 'useCases/createPerson/CreatePersonController';
import FindPersonByCpfController from 'useCases/findPersonByCpf/FindPersonByCpfController';
import ListPeopleController from 'useCases/listPeople/ListPeopleController';

const peopleRoutes = Router();

const createPersonController = new CreatePersonController();
const listPeopleController = new ListPeopleController();
const findPersonByCpfController = new FindPersonByCpfController();

peopleRoutes.post('/', createPersonController.handle);

peopleRoutes.get('/', listPeopleController.handle);

peopleRoutes.get('/:cpf', findPersonByCpfController.handle);

export default peopleRoutes;
