import { Injectable } from '@nestjs/common';
import { Movie } from './movie.model';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [
        {
            id: 1,
            name: 'The Shawshank Redemption'
        },
        {
            id: 2,
            name: 'The Dark Knight'
        }
    ];

    getMovies(): Movie[] {
        return this.movies;
    }
}
