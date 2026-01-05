/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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

// export class createTempDTO {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
// }

@Controller('temp')
export class TempController {
  // GET /temp
  @Get('/:id?/:category?')
  public getTemp(
    @Param() params?: string,
    @Query() query?: string,
    @Headers() headers?: any,
    @Ip() ip?: string,
  ) {
    console.log(params, query, headers, ip);

    if (params) {
      return {
        message: 'Hello from TempController, with PARAM',
        data: [],
      };
    }
    return {
      message: 'Hello from TempController',
      data: [],
    };
  }

  // POST /temp
  @Post()
  public createTemp(
    @Body() body: any,
    @Headers() headers: any,
    @Ip() ip: string,
  ) {
    console.log(body, headers, ip);
    return {
      message: 'Temp created successfully',
      body,
    };
  }

  // PATCH /temp/:id
  @Patch(':id')
  public updateTemp(@Param('id') id: string, @Body() body: any) {
    return {
      message: `Temp with id ${id} updated`,
      updatedData: body,
    };
  }

  // PUT /temp/:id
  @Put(':id')
  public replaceTemp(@Param('id') id: string, @Body() body: any) {
    return {
      message: `Temp with id ${id} replaced`,
      newData: body,
    };
  }

  // DELETE /temp/:id
  @Delete(':id')
  public deleteTemp(@Param('id') id: string) {
    return {
      message: `Temp with id ${id} deleted`,
    };
  }
}
