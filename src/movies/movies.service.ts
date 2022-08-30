import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { GetMoviesFilterDto } from './dto/get-movies-filter.dto';
import { Movie } from './movie.entity';
import { MoviesRepository } from './movies.repository';

@Injectable()
export class MoviesService {
    constructor(
        @InjectRepository(MoviesRepository)
        private moviesRepository: MoviesRepository
    ){}

    getMovies(filterDto: GetMoviesFilterDto): Promise<Movie[]> {
        return this.moviesRepository.getMovies(filterDto);
    }

    createTask(createMovieDto: CreateMovieDto): Promise<Movie> {
        return this.moviesRepository.createTask(createMovieDto);
    }
}
