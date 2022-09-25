import { Router } from 'express';
import CreateServiceLocationController from 'useCases/createServiceLocation/CreateServiceLocationController';

const serviceLocationsRoutes = Router();

const createServiceLocationController = new CreateServiceLocationController();

serviceLocationsRoutes.post('/', createServiceLocationController.handle);

export default serviceLocationsRoutes;
