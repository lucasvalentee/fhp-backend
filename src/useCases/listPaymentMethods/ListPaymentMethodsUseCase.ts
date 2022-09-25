import PaymentMethod from 'infra/typeorm/entities/PaymentMethod';
import { IPaymentMethodsRepository } from 'repositories/IPaymentMethodsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListPaymentMethodsUseCase {
  constructor(
    @inject('PaymentMethodsRepository')
    private paymentMethodsRepository: IPaymentMethodsRepository,
  ) {}

  async execute(): Promise<PaymentMethod[]> {
    const paymentMethods = await this.paymentMethodsRepository.list();

    return paymentMethods;
  }
}

export default ListPaymentMethodsUseCase;
