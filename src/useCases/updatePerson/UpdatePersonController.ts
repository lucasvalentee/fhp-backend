import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UpdatePersonUseCase from './UpdatePersonUseCase';

class UpdatePersonController {
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

    const updatePersonUseCase = container.resolve(UpdatePersonUseCase);

    await updatePersonUseCase.execute({
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

    return response.status(200).send();
  }
}

export default UpdatePersonController;
