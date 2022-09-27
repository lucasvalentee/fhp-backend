import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreatePersonUseCase from './CreatePersonUseCase';

class CreatePersonController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      cpf,
      name,
      email,
      phoneNumber,
      countryStateId,
      zipCode,
      cityId,
      district,
      address,
      complement,
      userId,
      user,
    } = request.body;

    const createPersonUseCase = container.resolve(CreatePersonUseCase);

    await createPersonUseCase.execute({
      cpf,
      name,
      email,
      phoneNumber,
      countryStateId,
      zipCode,
      cityId,
      district,
      address,
      complement,
      userId,
      user,
    });

    return response.status(201).send();
  }
}

export default CreatePersonController;
