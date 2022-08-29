import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetMoviesFilterDto } from './dto/get-movies-filter.dto';
import { MovieGenre } from './movie-genre.enum';
import { Movie } from './movie.entity';
import { MoviesRepository } from './movies.repository';

@Injectable()
export class MoviesService {
    constructor(
        @InjectRepository(MoviesRepository)
        private moviesRepository: MoviesRepository
    ){}

    getMovies(filterDto: GetMoviesFilterDto): Promise<Movie[]> {
        return this.moviesRepository.getTasks(filterDto);
    }
}
