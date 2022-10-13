import { Router } from 'express';
import paymentMethodsRoutes from './payment_methods.routes';
import peopleRoutes from './people.routes';
import professionalsRoutes from './professionals.routes';
import professionalsSpecialtiesRoutes from './professionals_specialties.routes';
import professionalsSpecialtiesPaymentMethodsRoutes from './professionals_specialties_payment_methods.routes';
import professionalsSpecialtiesServiceLocationsRoutes from './professionals_specialties_service_locations.routes';
import serviceLocationsRoutes from './service_locations.routes';
import sessionsRoutes from './sessions.routes';
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
router.use(
  '/professionals/specialties/serviceLocations',
  professionalsSpecialtiesServiceLocationsRoutes,
);
router.use(
  '/professionals/specialties/paymentMethods',
  professionalsSpecialtiesPaymentMethodsRoutes,
);
router.use('/sessions', sessionsRoutes);

export default router;
