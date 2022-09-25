import { Router } from 'express';
import CreateProfessionalController from 'useCases/createProfessional/CreateProfessionalController';
import FindProfessionalByCpfController from 'useCases/findProfessionalByCpf/FindProfessionalByCpfController';

const professionalsRoutes = Router();

const createProfessionalController = new CreateProfessionalController();
const findProfessionalByCpfController = new FindProfessionalByCpfController();

professionalsRoutes.post('/', createProfessionalController.handle);

professionalsRoutes.get('/:cpf', findProfessionalByCpfController.handle);

export default professionalsRoutes;
