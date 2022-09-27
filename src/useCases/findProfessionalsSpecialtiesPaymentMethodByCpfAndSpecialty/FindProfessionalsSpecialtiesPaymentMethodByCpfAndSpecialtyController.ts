import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FindProfessionalsSpecialtiesPaymentMethodByCpfAndSpecialtyUseCase from './FindProfessionalsSpecialtiesPaymentMethodByCpfAndSpecialtyUseCase';

class FindProfessionalsSpecialtiesPaymentMethodByCpfAndSpecialtyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { personCpf, specialtyId } = request.params;

    const findProfessionalsSpecialtiesPaymentMethodByCpfAndSpecialtyUseCase =
      container.resolve(
        FindProfessionalsSpecialtiesPaymentMethodByCpfAndSpecialtyUseCase,
      );

    const professionalsSpecialtiesPaymentMethods =
      await findProfessionalsSpecialtiesPaymentMethodByCpfAndSpecialtyUseCase.execute(
        personCpf,
        specialtyId,
      );

    return response.json(professionalsSpecialtiesPaymentMethods);
  }
}

export default FindProfessionalsSpecialtiesPaymentMethodByCpfAndSpecialtyController;
