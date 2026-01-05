/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  // injecting usersService
  // constructor(private readonly usersService: UsersService) {}

  public findAll(userId: string): any[] {
    // get the userId and its posts
    // const user = this.usersService.findOneById(userId);
    // const posts = [
    //   { user: user, title: 'First Post', content: 'This is the First post.' },
    //   { user: user, title: 'Second Post', content: 'This is the Second post.' },
    // ];
    // return posts;
    return [];

    // Logic to retrieve posts for a specific user
  }
}
