import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, JoinColumn } from "typeorm";
import { favoritoPl } from "./favoritoPl"

@Entity()
export class infoPl extends BaseEntity {

    @PrimaryGeneratedColumn()
    @Column()
    Nombre: string
    @Column()
    Rotacion: number
    @Column()
    Orbita: number
    @Column()
    Diametro: number
    @Column()
    Clima: string
    @Column()
    Gravedad: number
    @Column()
    Terreno: string
    @Column()
    Superficie: number
    @Column()
    Popularidad: number



    @ManyToMany(() => favoritoPl, favoritoPl => favoritoPl.infoPl)
    favoritoPl: favoritoPl;

}