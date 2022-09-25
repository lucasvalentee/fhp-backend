import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListPaymentMethodsUseCase from './ListPaymentMethodsUseCase';

class ListPaymentMethodsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listPaymentMethodsUseCase = container.resolve(
      ListPaymentMethodsUseCase,
    );

    const paymentMethods = await listPaymentMethodsUseCase.execute();

    return response.json(paymentMethods);
  }
}

export default ListPaymentMethodsController;
