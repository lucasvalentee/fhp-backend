import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FindServiceLocationByIdUseCase from './FindServiceLocationByIdUseCase';

class FindServiceLocattionByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findServiceLocationByIdUseCase = container.resolve(
      FindServiceLocationByIdUseCase,
    );

    const serviceLocation = await findServiceLocationByIdUseCase.execute(id);

    return response.json(serviceLocation);
  }
}

export default FindServiceLocattionByIdController;
