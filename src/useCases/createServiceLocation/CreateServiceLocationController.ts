import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateServiceLocationUseCase from './CreateServiceLocationUseCase';

class CreateServiceLocationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      id,
      countryStateId,
      zipCode,
      cityId,
      district,
      address,
      complement,
      phoneNumber,
      medicalInsurance,
      paymentMethods,
      professionalSpecialtyServiceLocation,
    } = request.body;

    const createServiceLocationUseCase = container.resolve(
      CreateServiceLocationUseCase,
    );

    const serviceLocation = await createServiceLocationUseCase.execute({
      id,
      countryStateId,
      zipCode,
      cityId,
      district,
      address,
      complement,
      phoneNumber,
      medicalInsurance,
      paymentMethods,
      professionalSpecialtyServiceLocation,
    });

    return response.status(201).json(serviceLocation);
  }
}

export default CreateServiceLocationController;
