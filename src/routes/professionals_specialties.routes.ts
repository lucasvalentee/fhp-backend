import { Router } from 'express';
import CreateProfessionalSpecialtyController from 'useCases/createProfessionalSpecialty/CreateProfessionalSpecialtyController';
import FindProfessionalsSpecialtiesByCpfController from 'useCases/findProfessionalsSpecialtiesByCpf/FindProfessionalsSpecialtiesByCpfController';
import FindProfessionalsSpecialtiesBySpecialtyIdController from 'useCases/findProfessionalsSpecialtiesBySpecialtyId/FindProfessionalsSpecialtiesBySpecialtyIdController';

const professionalsSpecialtiesRoutes = Router();

const createProfessionalSpecialtyController =
  new CreateProfessionalSpecialtyController();
const findProfessionalsSpecialtiesByCpfController =
  new FindProfessionalsSpecialtiesByCpfController();
const findProfessionalsSpecialtiesBySpecialtyIdController =
  new FindProfessionalsSpecialtiesBySpecialtyIdController();

professionalsSpecialtiesRoutes.post(
  '/',
  createProfessionalSpecialtyController.handle,
);

professionalsSpecialtiesRoutes.get(
  '/findByCpf/:cpf',
  findProfessionalsSpecialtiesByCpfController.handle,
);

professionalsSpecialtiesRoutes.get(
  '/findBySpecialty/:specialty_id',
  findProfessionalsSpecialtiesBySpecialtyIdController.handle,
);

export default professionalsSpecialtiesRoutes;
