import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateServiceLocations1664142749100 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'service_locations',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'country_state_id',
            type: 'integer',
          },
          {
            name: 'zip_code',
            type: 'varchar',
          },
          {
            name: 'city_id',
            type: 'integer',
          },
          {
            name: 'district',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'address',
            type: 'varchar',
            length: '250',
          },
          {
            name: 'complement',
            type: 'varchar',
            length: '250',
            isNullable: true,
          },
          {
            name: 'phone_number',
            type: 'varchar',
          },
          {
            name: 'medical_insurance',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('service_locations');
  }
}
