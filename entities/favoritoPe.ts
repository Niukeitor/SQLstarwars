import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable } from "typeorm"
import { usuario } from "./usuario"
import { infoPe } from "./infoPe"
@Entity()

export class favoritoPe extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:string
    @Column()
    Personajes:string



    @ManyToOne(() => usuario, usuario => usuario.favoritoPe)
    usuario: usuario

    @ManyToMany(() => infoPe, infoPe => infoPe.favoritoPe)
    @JoinTable()
    infoPe: infoPe[];

}