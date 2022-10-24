import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCountryStates1666639287651 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'country_states',
        columns: [
          {
            name: 'id',
            type: 'smallserial',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'uf',
            type: 'varchar',
            length: '5',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('country_states');
  }
}
