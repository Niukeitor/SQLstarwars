import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, JoinColumn } from "typeorm";
import { favoritoPe } from "./favoritoPe"

@Entity()
export class infoPe extends BaseEntity {

    @PrimaryGeneratedColumn()
    @Column()
    Nombre: string
    @Column()
    Altura: number
    @Column()
    Peso: number
    @Column()
    ColordePelo: string
    @Column()
    ColordePiel: string
    @Column()
    ColordeOjos: string
    @Column()
    AñodeNacimiento: number


    @ManyToMany(() => favoritoPe, favoritoPe => favoritoPe.infoPe)
    favoritoPe: favoritoPe;

}