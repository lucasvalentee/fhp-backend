import CountryState from 'infra/typeorm/entities/CountryState';
import { ICountryStatesRepository } from 'repositories/ICountryStatesRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class FindAllCountryStatesUseCase {
  constructor(
    @inject('CountryStatesRepository')
    private countryStatesRepository: ICountryStatesRepository,
  ) {}

  async execute(): Promise<CountryState[]> {
    const countryStates = await this.countryStatesRepository.findAll();

    return countryStates;
  }
}

export default FindAllCountryStatesUseCase;
