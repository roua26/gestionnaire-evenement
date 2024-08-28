import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nom:string;

    @Column()
    prenom:string;

    @Column()
    dateNes:string;

    @Column()
    email:string;

    @Column()
    password:string;
}