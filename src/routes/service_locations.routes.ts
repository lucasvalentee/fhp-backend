import { Router } from 'express';
import CreateServiceLocationController from 'useCases/createServiceLocation/CreateServiceLocationController';
import DeleteServiceLocationController from 'useCases/deleteServiceLocation/DeleteServiceLocationController';
import FindServiceLocattionByIdController from 'useCases/findServiceLocationById/FindServiceLocationByIdController';
import FindServiceLocationByProfessionalController from 'useCases/findServiceLocationByProfessional/FindServiceLocationByProfessionalController';
import FindServiceLocationByRegionAndSpecialtyIdController from 'useCases/findServiceLocationByRegionAndSpecialtyId/FindServiceLocationByRegionAndSpecialtyIdController';

const serviceLocationsRoutes = Router();

const createServiceLocationController = new CreateServiceLocationController();

const findServiceLocattionByIdController =
  new FindServiceLocattionByIdController();

const findServiceLocationByProfessionalController =
  new FindServiceLocationByProfessionalController();

const deleteServiceLocationController = new DeleteServiceLocationController();

const findServiceLocationByRegionAndSpecialtyIdController =
  new FindServiceLocationByRegionAndSpecialtyIdController();

serviceLocationsRoutes.post('/', createServiceLocationController.handle);

serviceLocationsRoutes.get('/:id', findServiceLocattionByIdController.handle);

serviceLocationsRoutes.get(
  '/findByProfessional/:professionalId',
  findServiceLocationByProfessionalController.handle,
);

serviceLocationsRoutes.get(
  '/findByRegionAndSpecialty/:countryStateId/:cityId/:specialtyId',
  findServiceLocationByRegionAndSpecialtyIdController.handle,
);

serviceLocationsRoutes.delete('/:id', deleteServiceLocationController.handle);

export default serviceLocationsRoutes;
