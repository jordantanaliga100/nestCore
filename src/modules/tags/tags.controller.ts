import {
  Body,
  Controller,
  Delete,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTagDTO } from './dtos/create-tag.dto';
import { TagsService } from './providers/tags.service';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post()
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
