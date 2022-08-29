import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { MovieGenre } from "../movie-genre.enum";

export class GetMoviesFilterDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsEnum(MovieGenre)
    genre?: MovieGenre
}