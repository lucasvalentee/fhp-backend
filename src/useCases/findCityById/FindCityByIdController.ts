import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FindCityByIdUseCase from './FindCityByIdUseCase';

class FindCityByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findCityByIdUseCase = container.resolve(FindCityByIdUseCase);

    const city = await findCityByIdUseCase.execute(id);

    return response.json(city);
  }
}

export default FindCityByIdController;
