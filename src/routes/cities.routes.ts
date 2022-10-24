import { Router } from 'express';
import FindCitiesByCountryStateController from 'useCases/findCitiesByCountryState/FindCitiesByCountryStateController';
import FindCityByIdController from 'useCases/findCityById/FindCityByIdController';

const citiesRoutes = Router();

const findCityByIdController = new FindCityByIdController();
const findCitiesByCountryStateController =
  new FindCitiesByCountryStateController();

citiesRoutes.get('/findById/:id', findCityByIdController.handle);

citiesRoutes.get(
  '/findByCountryState/:countryStateId',
  findCitiesByCountryStateController.handle,
);

export default citiesRoutes;
