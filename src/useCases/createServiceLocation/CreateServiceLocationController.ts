import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateServiceLocationUseCase from './CreateServiceLocationUseCase';

class CreateServiceLocationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      country_state_id,
      zip_code,
      city_id,
      district,
      address,
      complement,
      phone_number,
      medical_insurance,
    } = request.body;

    const createServiceLocationUseCase = container.resolve(
      CreateServiceLocationUseCase,
    );

    const serviceLocation = await createServiceLocationUseCase.execute({
      country_state_id,
      zip_code,
      city_id,
      district,
      address,
      complement,
      phone_number,
      medical_insurance,
    });

    return response.status(201).json(serviceLocation);
  }
}

export default CreateServiceLocationController;
