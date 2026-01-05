/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/providers/users.service';

@Injectable()
export class PostsService {
  // injecting usersService
  constructor(private readonly usersService: UsersService) {}

  public findAll(userId: string) {
    console.log(userId);

    // get the userId and its posts
    // const user = this.usersService.findOneById(userId);
    const user = this.usersService.findOneById(userId);
    const posts = [
      {
        title: 'First Post',
        content: 'This is the First post.',
      },
      {
        title: 'Second Post',
        content: 'This is the Second post.',
      },
    ];
    const data = { ...user, posts };
    return data;

    // return [
    //   { title: 'First Post', content: 'This is the First post.' },
    //   { title: 'Second Post', content: 'This is the Second post.' },
    // ];

    // Logic to retrieve posts for a specific user
  }
}
