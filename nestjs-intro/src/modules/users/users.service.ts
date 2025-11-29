/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { GetUsersRouteParamDto } from './dto/get-users-query-param.dto';

export interface User {
  id?: number;
  name: string;
  email: string;
}

@Injectable()
export class UsersService {
  findAllUsers(
    getUserRouteParamDto: GetUsersRouteParamDto,
    limit: number,
    page: number,
  ) {
    const users: User[] = [
      { id: 1, name: 'john', email: 'john@mail.com' },
      { id: 2, name: 'doe', email: 'doe@mail.com' },
    ];

    return users;
  }

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
