import { Router } from 'express';
import CreateUserController from 'useCases/createUser/CreateUserController';
import FindUserByIdController from 'useCases/findUserById/FindUserByIdController';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const findUserByIdController = new FindUserByIdController();

usersRoutes.post('/', createUserController.handle);

usersRoutes.get('/:id', findUserByIdController.handle);

export default usersRoutes;
