import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FindCitiesByCountryStateUseCase from './FindCitiesByCountryStateUseCase';

class FindCitiesByCountryStateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { countryStateId } = request.params;

    const findCitiesByCountryStateUseCase = container.resolve(
      FindCitiesByCountryStateUseCase,
    );

    const cities = await findCitiesByCountryStateUseCase.execute(
      countryStateId,
    );

    return response.json(cities);
  }
}

export default FindCitiesByCountryStateController;
