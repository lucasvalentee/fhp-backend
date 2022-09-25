import { Router } from 'express';
import peopleRoutes from './people.routes';
import specialtiesRoutes from './specialties.routes';
import usersRoutes from './users.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/people', peopleRoutes);
router.use('/specialties', specialtiesRoutes);

export default router;
