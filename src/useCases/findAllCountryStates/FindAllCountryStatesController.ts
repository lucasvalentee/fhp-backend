import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FindAllCountryStatesUseCase from './FindAllCountryStatesUseCase';

class FindAllCountryStatesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAllCountryStatesUseCase = container.resolve(
      FindAllCountryStatesUseCase,
    );

    const countryStates = await findAllCountryStatesUseCase.execute();

    return response.json(countryStates);
  }
}

export default FindAllCountryStatesController;
