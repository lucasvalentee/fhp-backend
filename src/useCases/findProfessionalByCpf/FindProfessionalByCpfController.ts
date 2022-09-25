import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FindProfessionalByCpfUseCase from './FindProfessionalByCpfUseCase';

class FindProfessionalByCpfController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.params;

    const findProfessionalByCpfUseCase = container.resolve(
      FindProfessionalByCpfUseCase,
    );

    const professional = await findProfessionalByCpfUseCase.execute(cpf);

    return response.json(professional);
  }
}

export default FindProfessionalByCpfController;
