import { Request, Response } from 'express';
import { container } from 'tsyringe';
import DeleteServiceLocationUseCase from './DeleteServiceLocationUseCase';

class DeleteServiceLocationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteServiceLocationUseCase = container.resolve(
      DeleteServiceLocationUseCase,
    );

    const deleted = await deleteServiceLocationUseCase.execute(id);

    return response.status(deleted ? 200 : 400).send();
  }
}

export default DeleteServiceLocationController;
