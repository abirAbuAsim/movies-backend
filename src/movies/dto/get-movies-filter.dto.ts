import { IsEnum, IsNotEmpty, IsOptional, IsString, Matches } from "class-validator";
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

    @IsNotEmpty()
    @Matches(/^[1-9][0-9]*$/, {
        message: 'Page number can not be less than zero',
    })
    page: number;

    @Matches(/^[1-9][0-9]*$/, {
        message: 'Limit can not be less than zero',
    })
    @IsNotEmpty()
    limit: number;

    @IsOptional()
    @IsEnum(SortOptions)
    sort?: SortOptions

    @IsOptional()
    @IsEnum(OrderByOptions)
    orderBy?: OrderByOptions
}