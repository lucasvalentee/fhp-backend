import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProfessionalsSpecialties1664143028356
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'professionals_specialties',
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
            name: 'register_number',
            type: 'varchar',
          },
          {
            name: 'class_entity',
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
        foreignKeys: [
          {
            name: 'FK_Professional',
            referencedTableName: 'professionals',
            referencedColumnNames: ['id', 'person_cpf'],
            columnNames: ['professional_id', 'person_cpf'],
          },
          {
            name: 'FK_Specialty',
            referencedTableName: 'specialties',
            referencedColumnNames: ['id'],
            columnNames: ['specialty_id'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('professionals_specialties');
  }
}
