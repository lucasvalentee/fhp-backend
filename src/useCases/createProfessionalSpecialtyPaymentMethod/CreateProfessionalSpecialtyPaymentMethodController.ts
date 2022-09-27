import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateProfessionalSpecialtyPaymentMethodUseCase from './CreateProfessionalSpecialtyPaymentMethodUseCase';

class CreateProfessionalSpecialtyPaymentMethodController {
  async handle(request: Request, response: Response): Promise<Response> {
    const professionalSpecialtyPaymentMethod = request.body;

    const createProfessionalSpecialtyPaymentMethodUseCase = container.resolve(
      CreateProfessionalSpecialtyPaymentMethodUseCase,
    );

    await createProfessionalSpecialtyPaymentMethodUseCase.execute(
      professionalSpecialtyPaymentMethod,
    );

    return response.status(201).send();
  }
}

export default CreateProfessionalSpecialtyPaymentMethodController;
