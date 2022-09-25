import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreatePersonUseCase from './CreatePersonUseCase';

class CreatePersonController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      cpf,
      name,
      email,
      phone_number,
      country_state_id,
      zip_code,
      city_id,
      district,
      address,
      complement,
      user_id,
    } = request.body;

    const createPersonUseCase = container.resolve(CreatePersonUseCase);

    await createPersonUseCase.execute({
      cpf,
      name,
      email,
      phone_number,
      country_state_id,
      zip_code,
      city_id,
      district,
      address,
      complement,
      user_id,
    });

    return response.status(201).send();
  }
}

export default CreatePersonController;
