import { AppError } from '@errors/AppError';
import CountryState from 'infra/typeorm/entities/CountryState';
import { ICountryStatesRepository } from 'repositories/ICountryStatesRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class FindCountryStateByIdUseCase {
  constructor(
    @inject('CountryStatesRepository')
    private countryStatesRepository: ICountryStatesRepository,
  ) {}

  async execute(id: string): Promise<CountryState> {
    const countryStateId = Number(id);

    console.log({ countryStateId, id });

    if (!countryStateId) {
      throw new AppError('Error on search country state by id');
    }

    const countryState = await this.countryStatesRepository.findById(
      countryStateId,
    );

    return countryState;
  }
}

export default FindCountryStateByIdUseCase;
