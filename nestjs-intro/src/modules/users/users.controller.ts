import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
// @Param() params: any, @Query() query: any)
@Controller('users')
export class UsersController {
  @Get('{:id}{/:optional}')
  public getUsers(@Param() params: any, @Query() query: any) {
    console.log('PARAMS', params);
    console.log('QUERY', query);

    return `You sent a GET request WITH PARAMS AND QUERY to the users endpoint  `;
  }

  @Post()
  public createUser(@Body() body: any) {
    return {
      message: 'You sent a POST request to the users endpoint',
      body,
    };
  }

  @Patch(':id')
  public updateUser(@Param('id') id: string, @Body() body: any) {
    return {
      message: `You sent a PATCH request to update user #${id}`,
      body,
    };
  }

  @Put(':id')
  public replaceUser(@Param('id') id: string, @Body() body: any) {
    return {
      message: `You sent a PUT request to replace user #${id}`,
      body,
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
// constructor(private readonly userSrvice: UsersService) {}
