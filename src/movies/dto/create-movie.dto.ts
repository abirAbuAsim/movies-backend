import { IsNotEmpty } from "class-validator";
import { MovieGenre } from "../enums/movie-genre.enum";

export class CreateMovieDto {
    @IsNotEmpty()
    name: string;
  
    @IsNotEmpty()
    genre: MovieGenre;
  }