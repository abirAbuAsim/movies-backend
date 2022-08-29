import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { GetMoviesFilterDto } from './dto/get-movies-filter.dto';
import { Movie } from './movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private moviesService: MoviesService){}

    @Get()
    getMovies(@Query() filterDto: GetMoviesFilterDto): Promise<Movie[]> {
        return this.moviesService.getMovies(filterDto);
    }

    @Post()
    createTask(
      @Body() createTaskDto: CreateMovieDto,
    ): Promise<Movie> {
      return this.moviesService.createTask(createTaskDto);
    }
}
