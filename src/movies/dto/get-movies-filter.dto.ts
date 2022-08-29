import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { MOVIE_GENRE } from "../movie-genre.enum";

export class GetMoviesFilterDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsEnum(MOVIE_GENRE)
    genre?: MOVIE_GENRE
}