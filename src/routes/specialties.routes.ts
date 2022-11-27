import { Router } from 'express';
import FindSpecialtyByNameController from 'useCases/findSpecialtyByName/FindSpecialtyByNameController';
import ListSpecialtiesController from 'useCases/listSpecialties/ListSpecialtiesController';

const specialtiesRoutes = Router();

const listSpecialtiesController = new ListSpecialtiesController();

const findSpecialtyByNameController = new FindSpecialtyByNameController();

specialtiesRoutes.get('/', listSpecialtiesController.handle);

specialtiesRoutes.get(
  '/findByName/:name',
  findSpecialtyByNameController.handle,
);

export default specialtiesRoutes;
