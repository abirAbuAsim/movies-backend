import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { GetMoviesFilterDto } from "./dto/get-movies-filter.dto";
import { Movie } from "./movie.entity";

@Injectable()
export class MoviesRepository extends Repository<Movie> {
  constructor(private dataSource: DataSource) {
      super(Movie, dataSource.createEntityManager());
  }

  async getMovies(filterDto: GetMoviesFilterDto): Promise<Movie[]> {
      const { name } = filterDto;
  
      const query = this.createQueryBuilder('movie');
  
      if (name) {
        query.andWhere(
          '(LOWER(movie.name) LIKE LOWER(:search) OR LOWER(task.description) LIKE LOWER(:name))',
          { name: `%${name}%` },
        );
      }
  
      try {
        const movies = await query.getMany();
        return movies;
      } catch (error) {
        throw new InternalServerErrorException();
      }
    }

    async createTask(createMovieDto: CreateMovieDto): Promise<Movie> {
      const { name, genre } = createMovieDto;
  
      const task = this.create({
        name,
        genre
      });
  
      await this.save(task);
      return task;
    }
}