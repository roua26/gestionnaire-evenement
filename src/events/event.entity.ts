import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'crud'})
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titre: string;

  @Column()
  description: string;

  @Column()
  date: string;

  @Column()
  temps: string;
}