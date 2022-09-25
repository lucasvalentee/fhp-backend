import DatabaseConfiguration from '@database/DatabaseConfiguration';
import { IPaymentMethodsRepository } from 'repositories/IPaymentMethodsRepository';
import { Repository } from 'typeorm';
import PaymentMethod from '../entities/PaymentMethod';

class PaymentMethodsRepository implements IPaymentMethodsRepository {
  private repository: Repository<PaymentMethod>;

  constructor() {
    this.repository =
      DatabaseConfiguration.getDataSourceInstance().getRepository(
        PaymentMethod,
      );
  }

  async findById(id: string): Promise<PaymentMethod> {
    const paymentMethod = await this.repository.findOne({ where: { id } });

    return paymentMethod;
  }

  async list(): Promise<PaymentMethod[]> {
    const paymentMethods = await this.repository.find();

    return paymentMethods;
  }
}

export default PaymentMethodsRepository;
