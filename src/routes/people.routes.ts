import { Router } from 'express';
import CreatePersonController from 'useCases/createPerson/CreatePersonController';
import FindPersonByCpfController from 'useCases/findPersonByCpf/FindPersonByCpfController';
import ListPeopleController from 'useCases/listPeople/ListPeopleController';
import UpdatePersonController from 'useCases/updatePerson/UpdatePersonController';

const peopleRoutes = Router();

const createPersonController = new CreatePersonController();
const updatePersonController = new UpdatePersonController();
const listPeopleController = new ListPeopleController();
const findPersonByCpfController = new FindPersonByCpfController();

peopleRoutes.post('/', createPersonController.handle);

peopleRoutes.put('/', updatePersonController.handle);

peopleRoutes.get('/', listPeopleController.handle);

peopleRoutes.get('/:cpf', findPersonByCpfController.handle);

export default peopleRoutes;
