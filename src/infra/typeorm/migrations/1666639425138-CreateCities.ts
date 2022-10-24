import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCities1666639425138 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'cities',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'country_state_id',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            name: 'FK_Country_State_City',
            referencedTableName: 'country_states',
            referencedColumnNames: ['id'],
            columnNames: ['country_state_id'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cities');
  }
}
