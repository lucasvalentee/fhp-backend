import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FindServiceLocationByRegionAndSpecialtyIdUseCase from './FindServiceLocationByRegionAndSpecialtyIdUseCase';

class FindServiceLocationByRegionAndSpecialtyIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { countryStateId, cityId, specialtyId } = request.params;

    const findServiceLocationByRegionAndSpecialtyIdUseCase = container.resolve(
      FindServiceLocationByRegionAndSpecialtyIdUseCase,
    );

    const serviceLocation =
      await findServiceLocationByRegionAndSpecialtyIdUseCase.execute(
        countryStateId,
        cityId,
        specialtyId,
      );

    return response.json(serviceLocation);
  }
}

export default FindServiceLocationByRegionAndSpecialtyIdController;
