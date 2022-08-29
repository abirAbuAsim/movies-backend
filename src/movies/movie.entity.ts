import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { MovieGenre } from "./movie-genre.enum";

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    genre: MovieGenre;
}