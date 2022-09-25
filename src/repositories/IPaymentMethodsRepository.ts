import PaymentMethod from 'infra/typeorm/entities/PaymentMethod';

interface IPaymentMethodsRepository {
  findById(id: string): Promise<PaymentMethod>;

  list(): Promise<PaymentMethod[]>;
}

export { IPaymentMethodsRepository };
