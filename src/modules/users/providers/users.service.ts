/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthService } from '../../auth/providers/auth.service';
import { CreateUserDTO } from '../dtos/create-user.dto';
import { GetUsersRouteParamDto } from '../dtos/get-users-query-param.dto';
import { User } from '../user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async createUser(createUserDto: CreateUserDTO) {
    // check if exists
    const existingUser = await this.userRepository.findOne({
      where: {
        email: createUserDto.email,
      },
    });

    // handl exception

    // creaet user
    let newUser = this.userRepository.create(createUserDto);
    newUser = await this.userRepository.save(newUser);

    return newUser;
  }

  public findAll(
    getUsersRouteParamsDto: GetUsersRouteParamDto,
    limit: number,
    page: number,
  ) {
    console.log(getUsersRouteParamsDto);
    // need the auth service
  }

  public async findOneById(id: number) {
    const existingUser = await this.userRepository.findOneBy({ id });
    if (!existingUser) {
      throw new NotFoundException('None Existing User ');
    }
    return existingUser;
  }
}

// 🔴 OLD CODE

// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { CreateUserDTO } from '../dtos/create-user.dto';
// import { GetUsersRouteParamDto } from '../dtos/get-users-query-param.dto';
// import { User } from '../user.entity';

// /**
//  * Class to connect to users table
//  */
// @Injectable()
// export class UsersService {
//   constructor(
//     // @Inject(forwardRef(() => AuthService))
//     // private readonly authService: AuthService,
//     @InjectRepository(User)
//     private usersRepository: Repository<User>,
//   ) {}

//   public async createUser(createUserDto: CreateUserDTO) {
//     //check if the user with the same email exists
//     const existingUser = await this.usersRepository.findOne({
//       where: { email: createUserDto.email },
//     });

//     // if user exists, throw exception
//     // create a new user

//     const newUser = this.usersRepository.create(createUserDto);
//     const createdUser = this.usersRepository.save(newUser);

//     return createdUser;
//   }

//   /**
//    * The method to get all the users from the database

//    */
//   public findAll(
//     getUserRouteParamDto: GetUsersRouteParamDto,
//     limit: number,
//     page: number,
//   ) {
//     //
//     // const isAuth = this.authService.isAuth();
//     // if (!isAuth) {
//     //   throw new HttpException(
//     //     {
//     //       status: HttpStatus.UNAUTHORIZED,
//     //       error: '💁 You need to be authenticated ',
//     //     },
//     //     HttpStatus.UNAUTHORIZED,
//     //   );
//     // }

//     const users: any[] = [
//       { id: 1, name: 'john', email: 'john@mail.com' },
//       { id: 2, name: 'doe', email: 'doe@mail.com' },
//     ];

//     // eslint-disable-next-line @typescript-eslint/no-unsafe-return
//     return users;
//   }

//   /**
//    * finding a single user

//    */
//   findOneById(id: string) {
//     // const users: User[] = [
//     //   { id: 1, name: 'john', email: 'john@mail.com' },
//     //   { id: 2, name: 'doe', email: 'doe@mail.com' },
//     // ];
//     return {
//       id: 1234,
//       firstName: 'Iza',
//       email: 'iza@mail.com',
//     };
//   }
// }
