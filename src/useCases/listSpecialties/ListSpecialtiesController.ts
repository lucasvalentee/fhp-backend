import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListSpecialtiesUseCase from './ListSpecialtiesUseCase';

class ListSpecialtiesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listSpecialtiesUseCase = container.resolve(ListSpecialtiesUseCase);

    const specialties = await listSpecialtiesUseCase.execute();

    return response.json(specialties);
  }
}

export default ListSpecialtiesController;
