import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FindCountryStateByIdUseCase from './FindCountryStateByIdUseCase';

class FindCountryStateByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findCountryStateByIdUseCase = container.resolve(
      FindCountryStateByIdUseCase,
    );

    const countryState = await findCountryStateByIdUseCase.execute(id);

    return response.json(countryState);
  }
}

export default FindCountryStateByIdController;
