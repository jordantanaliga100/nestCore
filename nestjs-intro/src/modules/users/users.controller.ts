import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import {
  GetUserQueryParamDto,
  GetUsersRouteParamDto,
} from './dto/get-users-query-param.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
// @Param() params: any, @Query() query: any)

@Controller('users/')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  public createUser(
    @Body()
    createUserDto: CreateUserDto,
  ): {
    message: string;
    data?: CreateUserDto;
  } {
    console.log(createUserDto instanceof CreateUserDto);

    return {
      message: 'You sent a POST request to the users endpoint',
      data: createUserDto,
    };
  }

  // @Get()
  // public getUser() {
  //   // so pwede ako mag query dito sa userService ng findAll()
  //   return {
  //     message: `You sent a GET request to  user `,
  //   };
  // }

  @Get(':id?/:category?')
  public getUsers(
    @Param() getUsersRouteParamsDto: GetUsersRouteParamDto,
    @Query() getUserQueryParamDto: GetUserQueryParamDto,
  ): string {
    console.log(getUsersRouteParamsDto);
    console.log(getUserQueryParamDto);

    if (getUsersRouteParamsDto) {
      // so pwede ako mag query dito sa userService ng findUser(id)
      return `You sent a GET request with ID to the users endpoint  `;
    } else {
      // so pwede ako mag query dito sa userService ng findUser(id, posts)
      return `You sent a GET request with OPTIONAL PARAMS to the users endpoint  `;
    }

    // console.log('route params', {
    //   id: typeof id,
    //   ID: id,
    // });
    // console.log('query params', {
    //   limit,
    //   page,
    // });
  }

  @Patch(':id')
  public updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return {
      message: `You sent a PATCH request to update user ${id}`,
      data: updateUserDto,
    };
  }

  @Put(':id')
  public replaceUser(@Param('id', ParseIntPipe) id: number) {
    return {
      message: `You sent a PUT request to replace user #${id}`,
    };
  }

  @Delete(':id')
  public deleteUser(@Param('id', ParseIntPipe) id: number) {
    return {
      message: `You sent a DELETE request to remove user #${id}`,
    };
  }
}
// @Param('id') id: string,
// @Param('optional') optional?: string,
// @Query('limit') limit?: string,
// @Query('offset') offset?: string,
// MODULAR WAY 🔴 | using DTO param
// @Param() getUserParamDto: GetUsersParamDto,
// @Query() getUserQueryDto: GetUserQueryDto,
