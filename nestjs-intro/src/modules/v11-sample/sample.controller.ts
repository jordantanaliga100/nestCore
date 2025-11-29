/* eslint-disable @typescript-eslint/no-unused-vars */
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
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateSampleDto } from './dto/create-sample.dto';
import { UpdateSampleDto } from './dto/update-sample.dto';
import { SampleService } from './sample.service';

@Controller('sample')
export class SampleController {
  constructor(private readonly sampleService: SampleService) {}

  @Post()
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  )
  create(
    @Body() createSampleDto: CreateSampleDto,
    @Headers() headers: any,
    @Ip() ip: any,
  ) {
    console.log(createSampleDto instanceof CreateSampleDto);
    return this.sampleService.create(createSampleDto);
  }

  @Get('index{/:role}{/:year}')
  findAll(
    @Param('role') role?: string,
    // 🔴 for v11 this works
    // @Param('year', new ParseIntPipe({ optional: true })) year?: number,
    // 🔴 for v10 this works
    @Param('year', new ParseIntPipe()) year?: number,

    @Query('limit', new DefaultValuePipe(10), ParseIntPipe)
    limit?: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page?: number,
  ) {
    // if (typeof role === 'undefined' && typeof year === 'undefined') {
    //   return `You requested ALL users`;
    // } else {
    //   return `You sent a GET request WITH PARAMS AND QUERY to the users endpoint  `;
    // }
    console.log(typeof role, typeof year);
    console.log(role, year, limit, page);

    return this.sampleService.findAll(role, year);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.sampleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSampleDto: UpdateSampleDto) {
    return this.sampleService.update(+id, updateSampleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sampleService.remove(+id);
  }
}
