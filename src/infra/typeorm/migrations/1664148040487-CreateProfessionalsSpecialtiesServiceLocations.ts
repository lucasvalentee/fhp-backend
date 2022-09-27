import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProfessionalsSpecialtiesServiceLocations1664148040487
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'professionals_specialties_service_locations',
        columns: [
          {
            name: 'professional_id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'person_cpf',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'specialty_id',
            type: 'integer',
            isPrimary: true,
          },
          {
            name: 'service_location_id',
            type: 'uuid',
            isPrimary: true,
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
        foreignKeys: [
          {
            name: 'FK_Professional_Specialty',
            referencedTableName: 'professionals_specialties',
            referencedColumnNames: [
              'professional_id',
              'person_cpf',
              'specialty_id',
            ],
            columnNames: ['professional_id', 'person_cpf', 'specialty_id'],
          },
          {
            name: 'FK_Service_Location',
            referencedTableName: 'service_locations',
            referencedColumnNames: ['id'],
            columnNames: ['service_location_id'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('professionals_specialties_service_locations');
  }
}
