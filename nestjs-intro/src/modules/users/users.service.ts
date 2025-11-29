/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { AuthService } from '../auth/providers/auth.service';
import { GetUsersRouteParamDto } from './dto/get-users-query-param.dto';

export interface User {
  id?: number;
  name: string;
  email: string;
}

/**
 * Class to connect to users table
 */
@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  /**
   * The method to get all the users from the database
   
   */
  findAll(
    getUserRouteParamDto: GetUsersRouteParamDto,
    limit: number,
    page: number,
  ) {
    //
    const isAuth = this.authService.isAuth();
    if (!isAuth) {
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          error: '💁 You need to be authenticated ',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }

    const users: User[] = [
      { id: 1, name: 'john', email: 'john@mail.com' },
      { id: 2, name: 'doe', email: 'doe@mail.com' },
    ];

    return users;
  }

  /**
   * finding a single user

   */
  findOneById(id: string) {
    // const users: User[] = [
    //   { id: 1, name: 'john', email: 'john@mail.com' },
    //   { id: 2, name: 'doe', email: 'doe@mail.com' },
    // ];
    return {
      id: 1234,
      firstName: 'Iza',
      email: 'iza@mail.com',
    };
  }
}
