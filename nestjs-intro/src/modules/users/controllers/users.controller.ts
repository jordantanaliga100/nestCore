/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import {
  BadRequestException,
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from '../dtos/create-user.dto';
import {
  GetUserRouteParamRequiredDto,
  GetUsersRouteParamDto,
} from '../dtos/get-users-query-param.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { UsersService } from '../providers/users.service';
// @Param() params: any, @Query() query: any)

@ApiTags(`Users`)
@Controller('users/')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Get()
  // public getUser(): { message: string; data?: any } {
  //   return {
  //     message: 'You sent a GET request to the users endpoint',
  //   };
  // }

  @Post()
  public createUser(
    @Body()
    createUserDto: CreateUserDTO,
  ) {
    // : {
    //   message: string;
    //   data?: CreateUserDto | any;
    // }

    console.log(createUserDto instanceof CreateUserDTO);

    return {
      message: 'You sent a POST request to the users endpoint',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      data: createUserDto,
    };
  }

  @Get('/:id?/:category?')
  @ApiOperation({
    summary: 'It fetches the list of all the users',
  })
  @ApiResponse({
    status: 200,
    description: '👱 Users fetched successfully ',
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
    description: ' The number of entries returned per query',
    example: 10,
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: false,
    description: ' The position of the page number that you want API to return',
    example: 1,
  })
  public getUsers(
    @Param() getUsersRouteParamsDto: GetUsersRouteParamDto,
    @Query('limit', new DefaultValuePipe(100)) limit: number,
    @Query('page', new DefaultValuePipe(1)) page: number,
  ): any | any[] {
    console.log(getUsersRouteParamsDto);
    console.log(
      typeof getUsersRouteParamsDto.id,
      typeof getUsersRouteParamsDto.category,
    );

    if (!getUsersRouteParamsDto.id && !getUsersRouteParamsDto.category) {
      return 'You sent a GET request with NO PARAMS to the users endpoint';
    }
    return this.usersService.findAll(getUsersRouteParamsDto, limit, page);
  }

  @Patch(':id?')
  public updateUser(
    @Param() getUserRouteParamRequiredDto: GetUserRouteParamRequiredDto,

    @Body() updateUserDto: UpdateUserDto,
  ) {
    if (!getUserRouteParamRequiredDto) {
      throw new BadRequestException('ID is required'); // ✅ custom friendly 400
    }
    return {
      message: `You sent a PATCH request to update user ${getUserRouteParamRequiredDto.id}`,
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

// if (getUsersRouteParamsDto.id) {
//   return this.usersService.findOneById(getUsersRouteParmsDto);
// } else {a
//   return this.usersService.findAllUsers(
//     getUsersRouteParamsDto,
//     limit,
//     page,
//   );
// }

// if (getUsersRouteParamsDto) {
//   // so pwede ako mag query dito sa userService ng findUser(id)
//   return `You sent a GET request with ID to the users endpoint  `;
// } else {
//   // so pwede ako mag query dito sa userService ng findUser(id, posts)
//   return `You sent a GET request with OPTIONAL PARAMS to the users endpoint  `;
// }

// console.log('route params', {
//   id: typeof id,
//   ID: id,
// });
// console.log('query params', {
//   limit,
//   page,
// });
