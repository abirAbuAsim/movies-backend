import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Logger } from '@nestjs/common';

import { JwtPayload } from './jwt-payload.interface';
import { User } from './user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private logger = new Logger();

  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
    private configService: ConfigService,
  ) {
    super({
      secretOrKey: configService.get('JWT_SECRET'),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });

    const logger = new Logger();
    logger.log(configService.get('JWT_SECRET'));
  }

  async validate(payload: JwtPayload, done): Promise<User> {
    this.logger.log(payload);
    const { username } = payload;
    const user: User = await this.usersRepository.findOne({ 
        where: {
            username
        }
     });

    if (!user) {
      throw new UnauthorizedException();
    }

    return done(null, user);
  }
}