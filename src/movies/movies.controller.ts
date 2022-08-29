import { Controller, Get, Query } from '@nestjs/common';
import { GetMoviesFilterDto } from './dto/get-movies-filter.dto';
import { Movie } from './movie.model';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private moviesService: MoviesService){}

    @Get()
    getMovies(@Query() filterDto: GetMoviesFilterDto): Movie[] {
        if(Object.keys(filterDto).length) {
            return this.moviesService.getFilteredMovies(filterDto);
        } else {
            return this.moviesService.getMovies();
        }
    }
}
