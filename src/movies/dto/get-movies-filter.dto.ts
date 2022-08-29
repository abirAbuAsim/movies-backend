import { MOVIE_GENRE } from "../movie-genre.enum";

export class GetMoviesFilterDto {
    name?: string;
    genre?: MOVIE_GENRE
}