/* eslint-disable @typescript-eslint/no-unused-vars */
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from '../../users/providers/users.service';

@Injectable()
export class AuthService {
  // injecting users service

  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  public login(email: string, password: string, id: string) {
    // check user if it exists,
    const user = this.usersService.findOneById('123');

    // login
    // tokenservice
    return 'SAMPLE_TOKEN';
  }

  public isAuth() {
    return true;
  }
}
