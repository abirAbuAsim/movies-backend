import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { MovieGenre } from "../enums/movie-genre.enum";
import { OrderByOptions } from "../enums/order-by-options.enum";
import { SortOptions } from "../enums/sort-options.enum";

export class GetMoviesFilterDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsEnum(MovieGenre)
    genre?: MovieGenre

    @IsOptional()
    @IsEnum(SortOptions)
    sort?: SortOptions

    @IsOptional()
    @IsEnum(OrderByOptions)
    orderBy?: OrderByOptions
}