import { MOVIE_GENRE } from "./movie-genre.enum";

export interface Movie {
    id: number,
    name: string,
    genre: MOVIE_GENRE,
}