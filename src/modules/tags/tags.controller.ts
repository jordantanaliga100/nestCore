import {
  Body,
  Controller,
  Delete,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTagDTO } from './dtos/create-tag.dto';
import { TagsService } from './providers/tags.service';

@ApiTags('Tags')
@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post()
  @ApiOperation({
    summary: 'This API endpoint creates a new tags',
  })
  @ApiResponse({
    status: 201,
    description: 'You get a 201 response if your tags is created sucessfully',
  })
  public create(@Body() createTagDto: CreateTagDTO) {
    return this.tagsService.create(createTagDto);
  }

  @Delete()
  public delete(@Query('id', ParseIntPipe) tagId: number) {
    console.log('query for delete', tagId);

    return this.tagsService.delete(tagId);
  }

  @Delete('/soft-delete')
  public softDelete(@Query('id', ParseIntPipe) tagId: number) {
    console.log('query for delete', tagId);

    return this.tagsService.softDelete(tagId);
  }
}
