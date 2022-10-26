import { Router } from 'express';
import CreateServiceLocationController from 'useCases/createServiceLocation/CreateServiceLocationController';
import DeleteServiceLocationController from 'useCases/deleteServiceLocation/DeleteServiceLocationController';
import FindServiceLocattionByIdController from 'useCases/findServiceLocationById/FindServiceLocationByIdController';
import FindServiceLocationByProfessionalController from 'useCases/findServiceLocationByProfessional/FindServiceLocationByProfessionalController';

const serviceLocationsRoutes = Router();

const createServiceLocationController = new CreateServiceLocationController();

const findServiceLocattionByIdController =
  new FindServiceLocattionByIdController();

const findServiceLocationByProfessionalController =
  new FindServiceLocationByProfessionalController();

serviceLocationsRoutes.post('/', createServiceLocationController.handle);

serviceLocationsRoutes.get('/:id', findServiceLocattionByIdController.handle);

serviceLocationsRoutes.get(
  '/findByProfessional/:professionalId',
  findServiceLocationByProfessionalController.handle,
);

export default serviceLocationsRoutes;
