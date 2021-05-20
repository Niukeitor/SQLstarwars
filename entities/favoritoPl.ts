import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable } from "typeorm"
import { usuario } from "./usuario"
import { infoPl } from "./infoPl"
@Entity()

export class favoritoPl extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:string
    @Column()
    planetas: string

    @ManyToOne(() => usuario, usuario => usuario.favoritoPl)
    usuario: usuario

    @ManyToMany(() => infoPl, infoPl => infoPl.favoritoPl)
    @JoinTable()
    infoPl: infoPl[];

}
