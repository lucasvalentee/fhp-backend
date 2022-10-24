import { Router } from 'express';
import FindAllCountryStatesController from 'useCases/findAllCountryStates/FindAllCountryStatesController';
import FindCountryStateByIdController from 'useCases/findCountryStateById/FindCountryStateByIdController';

const countryStatesRoutes = Router();

const findAllCountryStatesController = new FindAllCountryStatesController();
const findCountryStateByIdController = new FindCountryStateByIdController();

countryStatesRoutes.get('/', findAllCountryStatesController.handle);

countryStatesRoutes.get('/findById/:id', findCountryStateByIdController.handle);

export default countryStatesRoutes;
