import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('payment_methods')
class PaymentMethod {
  @PrimaryColumn()
  id: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;
}

export default PaymentMethod;
