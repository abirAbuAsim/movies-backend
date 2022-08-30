import { Body, Controller, Get, Logger, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateMovieDto } from './dto/create-movie.dto';
import { GetMoviesFilterDto } from './dto/get-movies-filter.dto';
import { Movie } from './movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
@UseGuards(AuthGuard('jwt'))
export class MoviesController {
    private logger = new Logger('MoviesController');
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
