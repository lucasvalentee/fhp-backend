import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('specialties')
class Specialty {
  @PrimaryColumn()
  id: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;
}

export default Specialty;
