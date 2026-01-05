/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Headers,
  Ip,
  Param,
  ParseIntPipe,
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
    @Param('id', ParseIntPipe) id?: number,
    @Param('category') category?: string,
    @Query('weight', ParseIntPipe) weight?: number,
    @Query('limit', new DefaultValuePipe(50), ParseIntPipe) limit?: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page?: number,

    // @Headers() headers?: any,
    // @Ip() ip?: string,
  ) {
    console.log({ id }, typeof id);
    console.log({ category }, typeof category);
    console.log({ weight }, typeof weight);
    console.log({ limit }, typeof limit);
    console.log({ page }, typeof page);

    if (id || category) {
      return {
        message: 'Hello from TempController, with PARAM',
      };
    }
    return {
      message: 'Hello from TempController',
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
