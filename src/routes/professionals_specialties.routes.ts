import { Router } from 'express';
import CreateProfessionalSpecialtyController from 'useCases/createProfessionalSpecialty/CreateProfessionalSpecialtyController';
import DeleteProfessionalSpecialtyController from 'useCases/deleteProfessionalSpecialty/DeleteProfessionalSpecialtyController';
import FindProfessionalsSpecialtiesByCpfController from 'useCases/findProfessionalsSpecialtiesByCpf/FindProfessionalsSpecialtiesByCpfController';
import FindProfessionalsSpecialtiesBySpecialtyIdController from 'useCases/findProfessionalsSpecialtiesBySpecialtyId/FindProfessionalsSpecialtiesBySpecialtyIdController';

const professionalsSpecialtiesRoutes = Router();

const createProfessionalSpecialtyController =
  new CreateProfessionalSpecialtyController();
const findProfessionalsSpecialtiesByCpfController =
  new FindProfessionalsSpecialtiesByCpfController();
const findProfessionalsSpecialtiesBySpecialtyIdController =
  new FindProfessionalsSpecialtiesBySpecialtyIdController();
const deleteProfessionalSpecialtyController =
  new DeleteProfessionalSpecialtyController();

professionalsSpecialtiesRoutes.post(
  '/',
  createProfessionalSpecialtyController.handle,
);

professionalsSpecialtiesRoutes.get(
  '/findByCpf/:cpf',
  findProfessionalsSpecialtiesByCpfController.handle,
);

professionalsSpecialtiesRoutes.get(
  '/findBySpecialty/:specialtyId',
  findProfessionalsSpecialtiesBySpecialtyIdController.handle,
);

professionalsSpecialtiesRoutes.delete(
  '/:professionalId/:specialtyId',
  deleteProfessionalSpecialtyController.handle,
);

export default professionalsSpecialtiesRoutes;
