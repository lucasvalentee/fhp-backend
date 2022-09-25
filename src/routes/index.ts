import { Router } from 'express';
import peopleRoutes from './people.routes';
import usersRoutes from './users.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/people', peopleRoutes);

export default router;
