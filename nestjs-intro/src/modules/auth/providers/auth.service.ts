/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  // injecting users service
  // constructor(
  //   @Inject(forwardRef(() => UsersService))
  //   private readonly usersService: UsersService,
  // ) {}

  public login(email: string, password: string, id: string) {
    // check user if it exists,
    // const user = this.usersService.findOneById('123');
    // login
    // token
    return 'SAMPLE_TOKEN';
  }

  public isAuth() {
    return false;
  }
}
