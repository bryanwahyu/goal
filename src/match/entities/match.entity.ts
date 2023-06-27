import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Match {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  macth_date: Date;

  @Column()
  team1: string;

  @Column()
  team2: string;

  @Column()
  location: string;
}
