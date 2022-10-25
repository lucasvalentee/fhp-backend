import { Router } from 'express';
import CreateUserController from 'useCases/createUser/CreateUserController';
import FindUserByIdController from 'useCases/findUserById/FindUserByIdController';
import FindUserByUsernameController from 'useCases/findUserByUsername/FindUserByUsernameController';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const findUserByIdController = new FindUserByIdController();
const findUserByUsernameController = new FindUserByUsernameController();

usersRoutes.post('/', createUserController.handle);

usersRoutes.get('/:id', findUserByIdController.handle);
usersRoutes.get(
  '/findByUsername/:username',
  findUserByUsernameController.handle,
);

export default usersRoutes;
