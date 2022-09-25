import { Router } from 'express';
import peopleRoutes from './people.routes';
import professionalsRoutes from './professionals.routes';
import specialtiesRoutes from './specialties.routes';
import usersRoutes from './users.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/people', peopleRoutes);
router.use('/specialties', specialtiesRoutes);
router.use('/professionals', professionalsRoutes);

export default router;
