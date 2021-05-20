import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { favoritoPl } from "./favoritoPl"
import { favoritoPe } from "./favoritoPe"


@Entity()
export class usuario extends BaseEntity {

    @PrimaryGeneratedColumn()
    usuario:string
    @Column()
    email: string
    @Column()
    contraseña: number



    @OneToMany(() => favoritoPl, favoritoPl => favoritoPl.usuario)
    favoritoPl: favoritoPl;

    @OneToMany(() => favoritoPe, favoritoPe => favoritoPe.usuario)
    favoritoPe: favoritoPe;

}