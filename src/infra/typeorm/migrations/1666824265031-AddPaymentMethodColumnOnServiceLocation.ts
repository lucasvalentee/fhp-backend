import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddPaymentMethodColumnOnServiceLocation1666824265031
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE service_locations ADD COLUMN payment_methods JSONB
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE service_locations DROP COLUMN payment_methods
      `);
  }
}
