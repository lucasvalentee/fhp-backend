import { Router } from 'express';
import ListPaymentMethodsController from 'useCases/listPaymentMethods/ListPaymentMethodsController';

const paymentMethodsRoutes = Router();

const listPaymentMethodsController = new ListPaymentMethodsController();

paymentMethodsRoutes.get('/', listPaymentMethodsController.handle);

export default paymentMethodsRoutes;
