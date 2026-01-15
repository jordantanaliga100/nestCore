/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BadRequestException,
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
  RequestTimeoutException,
} from '@nestjs/common';
import type { ConfigType } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { isPostgresError } from '../../../class/error';
import profileConfig from '../../../config/profile.config';
import { AuthService } from '../../auth/providers/auth.service';
import { CreateUserDTO } from '../dtos/create-user.dto';
import { GetUsersRouteParamDto } from '../dtos/get-users-query-param.dto';
import { User } from '../user.entity';
import { UsersCreateManyProvider } from './users-create-many.provider';

@Injectable()
export class UsersService {
  constructor(
    /**
     * iNJECTING CONFIG SERVERVICE
     *
     */
    @Inject(profileConfig.KEY)
    private readonly profileConfiguration: ConfigType<typeof profileConfig>,

    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    /**
     * inject createmanyproviders
     */
    private readonly usersCreateManyProvider: UsersCreateManyProvider,
  ) {}

  public async createUser(createUserDto: CreateUserDTO) {
    try {
      // creaet user
      const newUser = this.userRepository.create(createUserDto);
      return await this.userRepository.save(newUser);
    } catch (error: unknown) {
      console.log('create user error', error);
      if (isPostgresError(error) && error.code === '23505') {
        throw new BadRequestException('User already exists');
      }

      throw new RequestTimeoutException(
        'Unable to process your request at the moment. Please try again later',
        {
          description: 'Error connecting to the database',
        },
      );
    }
  }

  public findAll(
    getUsersRouteParamsDto: GetUsersRouteParamDto,
    limit: number,
    page: number,
  ) {
    throw new HttpException(
      'This endpoint is not working anymore',
      HttpStatus.MOVED_PERMANENTLY,
      {
        cause: new Error(),
        description: 'Occured because the api endpoint is removed',
      },
    );
  }
  public async findOneById(id: number) {
    let user = null;
    try {
      user = await this.userRepository.findOneBy({ id });
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment. Please try again later',
        {
          description: 'Error connecting to the database',
        },
      );
    }
    if (!user) {
      throw new NotFoundException(`User with id ${id} does not exist`);
    }
    return user as User;
  }

  public async createMany(createUsersDto: CreateUserDTO[]) {
    return await this.usersCreateManyProvider.createMany(createUsersDto);
  }
}

// REFERENCE 🔴

// public async createUser(createUserDto: CreateUserDTO) {
//   let existingUser = null;
//   try {
//     existingUser = await this.userRepository.findOne({
//       where: {
//         email: createUserDto.email,
//       },
//     });
//   } catch (error) {
//     throw new RequestTimeoutException(
//       'Unable to process your request at the moment. Please try again later',
//       {
//         description: 'Error connecting to the database',
//       },
//     );
//   }
//   if (existingUser) {
//     throw new BadRequestException(`User already exists`);
//   }

//   // creaet user
//   let newUser = this.userRepository.create(createUserDto);
//   try {
//     newUser = await this.userRepository.save(newUser);
//   } catch (error) {
//     throw new RequestTimeoutException(
//       'Unable to process your request at the moment. Please try again later',
//       {
//         description: 'Error connecting to the database',
//       },
//     );
//   }

//   return newUser;
// }

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
