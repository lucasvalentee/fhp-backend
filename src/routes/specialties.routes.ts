import { Router } from 'express';
import CreateUserController from 'useCases/createUser/CreateUserController';
import FindUserByIdController from 'useCases/findUserById/FindUserByIdController';
import ListSpecialtiesController from 'useCases/listSpecialties/ListSpecialtiesController';

const specialtiesRoutes = Router();

const listSpecialtiesController = new ListSpecialtiesController();

specialtiesRoutes.get('/', listSpecialtiesController.handle);

export default specialtiesRoutes;
