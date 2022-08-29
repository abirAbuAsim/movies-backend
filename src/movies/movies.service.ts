import { Injectable } from '@nestjs/common';
import { GetMoviesFilterDto } from './dto/get-movies-filter.dto';
import { MOVIE_GENRE } from './movie-genre.enum';
import { Movie } from './movie.model';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [
        {
            id: 1,
            name: 'The Shawshank Redemption',
            genre: MOVIE_GENRE.DRAMA
        },
        {
            id: 2,
            name: 'The Dark Knight',
            genre: MOVIE_GENRE.ACTION
        }
    ];

    getMovies(): Movie[] {
        return this.movies;
    }

    getFilteredMovies(filtersDto: GetMoviesFilterDto): Movie[] {
        const { name } = filtersDto;
        let filteredMovies = this.movies;

        if(name) {
            filteredMovies = filteredMovies.filter((movie) => movie.name.includes(name));
        }

        return filteredMovies;
    }
}
