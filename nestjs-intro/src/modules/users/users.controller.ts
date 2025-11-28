import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Ip,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserParamRequiredDto } from './dto/get-users-query-param.dto';
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
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      headers,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      ip,
    };
  }

  @Get()
  public getUser() {
    // so pwede ako mag query dito sa userService ng findAll()

    return {
      message: `You sent a GET request to  user `,
    };
  }

  @Get(':id{/:optional}')
  public getUsers(
    @Param('id', new ParseIntPipe({ optional: true })) id?: number,
    @Param('optional') optional?: string,
  ): string {
    console.log(id, optional);

    if (id && !optional) {
      // so pwede ako mag query dito sa userService ng findUser(id)
      return `You sent a GET request with ID to the users endpoint  `;
    } else {
      // so pwede ako mag query dito sa userService ng findUser(id, posts)
      return `You sent a GET request with OPTIONAL PARAMS to the users endpoint  `;
    }
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
  public replaceUser(@Param('id') id: string) {
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
// MODULAR WAY 🔴 | using DTO param
// @Param() getUserParamDto: GetUsersParamDto,
// @Query() getUserQueryDto: GetUserQueryDto,
