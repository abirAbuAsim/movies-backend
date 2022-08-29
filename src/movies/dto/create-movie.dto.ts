import { IsNotEmpty } from "class-validator";
import { MovieGenre } from "../movie-genre.enum";

export class CreateMovieDto {
    @IsNotEmpty()
    name: string;
  
    @IsNotEmpty()
    genre: MovieGenre;
  }