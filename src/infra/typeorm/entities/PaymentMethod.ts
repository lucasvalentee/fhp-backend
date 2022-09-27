import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('payment_methods')
class PaymentMethod {
  @PrimaryColumn()
  id: string;

  @Column()
  description: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}

export default PaymentMethod;
