import { Router } from 'express';
import ListSpecialtiesController from 'useCases/listSpecialties/ListSpecialtiesController';

const specialtiesRoutes = Router();

const listSpecialtiesController = new ListSpecialtiesController();

specialtiesRoutes.get('/', listSpecialtiesController.handle);

export default specialtiesRoutes;
