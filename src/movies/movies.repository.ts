import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { GetMoviesFilterDto } from "./dto/get-movies-filter.dto";
import { Movie } from "./movie.entity";

@Injectable()
export class MoviesRepository extends Repository<Movie> {
    constructor(private dataSource: DataSource) {
        super(Movie, dataSource.createEntityManager());
    }

    async getTasks(filterDto: GetMoviesFilterDto): Promise<Movie[]> {
        const { name } = filterDto;
    
        const query = this.createQueryBuilder('task');
        // query.where({ user });
    
        if (status) {
          query.andWhere('task.status = :status', { status });
        }
    
        if (name) {
          query.andWhere(
            '(LOWER(movie.name) LIKE LOWER(:search) OR LOWER(task.description) LIKE LOWER(:name))',
            { name: `%${name}%` },
          );
        }
    
        try {
          const tasks = await query.getMany();
          return tasks;
        } catch (error) {
        //   this.logger.error(
        //     `Failed to get tasks for user "${
        //       user.username
        //     }". Filters: ${JSON.stringify(filterDto)}`,
        //     error.stack,
        //   );
          throw new InternalServerErrorException();
        }
      }
}