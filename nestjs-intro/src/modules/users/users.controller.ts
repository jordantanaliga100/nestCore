import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Ip,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import {
  GetUserParamRequiredDto,
  GetUserQueryDto,
  GetUsersParamDto,
} from './dto/get-users-query-param.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
// @Param() params: any, @Query() query: any)

@Controller('users')
export class UsersController {
  constructor(private readonly userSrvice: UsersService) {}

  @Get('{/:id}{/:username}')
  public getUsers(
    // BASIC WAY 🔴 | using param
    // @Param('id', ParseIntPipe) id: number | undefined,
    // @Param('username') username: string | undefined,
    // @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit?: number,
    // @Query('page', new DefaultValuePipe(1), ParseIntPipe) page?: number,

    // MODULAR WAY 🔴 | using DTO param
    @Param() getUserParamDto: GetUsersParamDto,
    @Query() getUserQueryDto: GetUserQueryDto,
  ): string {
    console.log('DTO PARAMS', getUserParamDto);

    console
      .log
      // typeof id,
      // typeof username,
      // typeof page,
      // typeof limit,
      ();

    console.log(getUserParamDto, getUserQueryDto);

    if (
      // typeof id === 'undefined' &&
      // typeof username === 'undefined' &&
      // typeof page === 'undefined' &&
      // typeof limit === 'undefined'
      typeof getUserParamDto === 'undefined' &&
      typeof getUserQueryDto === 'undefined'
    ) {
      return `You requested ALL users`;
    } else {
      return `You sent a GET request WITH PARAMS AND QUERY to the users endpoint  `;
    }
  }

  @Post()
  public createUser(
    @Body()
    createUserDto: CreateUserDto,
    @Headers() headers: any,
    @Ip() ip: any,
  ): {
    message: string;
    createUserDto: CreateUserDto;
    headers: any;
    ip: any;
  } {
    console.log(createUserDto instanceof CreateUserDto);

    return {
      message: 'You sent a POST request to the users endpoint',
      createUserDto,
      headers,
      ip,
    };
  }

  @Patch(':id')
  public updateUser(
    @Param() getUserParamRequiredDto: GetUserParamRequiredDto,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const { id } = getUserParamRequiredDto;

    return {
      message: `You sent a PATCH request to update user ${id}`,
      data: updateUserDto,
    };
  }

  @Put(':id')
  public replaceUser(@Param('id') id: string, @Body() body: any) {
    return {
      message: `You sent a PUT request to replace user #${id}`,
    };
  }

  @Delete(':id')
  public deleteUser(@Param('id') id: string) {
    return {
      message: `You sent a DELETE request to remove user #${id}`,
    };
  }
}
// @Param('id') id: string,
// @Param('optional') optional?: string,
// @Query('limit') limit?: string,
// @Query('offset') offset?: string,
