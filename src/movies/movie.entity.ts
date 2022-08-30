import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { MovieGenre } from "./enums/movie-genre.enum";

@Entity()
export class Movie {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    genre: MovieGenre;
}