import { Router } from 'express';
import paymentMethodsRoutes from './payment_methods.routes';
import peopleRoutes from './people.routes';
import professionalsRoutes from './professionals.routes';
import professionalsSpecialtiesRoutes from './professionals_specialties.routes';
import serviceLocationsRoutes from './service_locations.routes';
import specialtiesRoutes from './specialties.routes';
import usersRoutes from './users.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/people', peopleRoutes);
router.use('/specialties', specialtiesRoutes);
router.use('/professionals', professionalsRoutes);
router.use('/paymentMethods', paymentMethodsRoutes);
router.use('/serviceLocations', serviceLocationsRoutes);
router.use('/professionals/specialties', professionalsSpecialtiesRoutes);

export default router;
