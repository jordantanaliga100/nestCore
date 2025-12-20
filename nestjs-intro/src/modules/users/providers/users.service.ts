/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { GetUsersRouteParamDto } from '../dto/get-users-query-param.dto';
import { User } from '../user.entity';

/**
 * Class to connect to users table
 */
@Injectable()
export class UsersService {
  constructor(
    // @Inject(forwardRef(() => AuthService))
    // private readonly authService: AuthService,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  public async createUser(createUserDto: CreateUserDto) {
    //check if the user with the same email exists
    const existingUser = await this.usersRepository.findOne({
      where: { email: createUserDto.email },
    });

    // if user exists, throw exception
    // create a new user

    const newUser = this.usersRepository.create(createUserDto);
    const createdUser = this.usersRepository.save(newUser);

    return createdUser;
  }

  /**
   * The method to get all the users from the database
   
   */
  public findAll(
    getUserRouteParamDto: GetUsersRouteParamDto,
    limit: number,
    page: number,
  ) {
    //
    // const isAuth = this.authService.isAuth();
    // if (!isAuth) {
    //   throw new HttpException(
    //     {
    //       status: HttpStatus.UNAUTHORIZED,
    //       error: '💁 You need to be authenticated ',
    //     },
    //     HttpStatus.UNAUTHORIZED,
    //   );
    // }

    const users: any[] = [
      { id: 1, name: 'john', email: 'john@mail.com' },
      { id: 2, name: 'doe', email: 'doe@mail.com' },
    ];

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
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
