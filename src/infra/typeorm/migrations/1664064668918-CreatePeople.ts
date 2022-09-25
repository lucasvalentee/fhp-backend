import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePeople1664064668918 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'people',
        columns: [
          {
            name: 'cpf',
            type: 'varchar',
            length: '11',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '250',
          },
          {
            name: 'email',
            type: 'varchar',
            length: '250',
          },
          {
            name: 'phone_number',
            type: 'varchar',
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
            name: 'user_id',
            type: 'uuid',
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
            name: 'FK_User_Person',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_id'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('people');
  }
}
