import { Body, Controller, Post } from '@nestjs/common';
import { CreateTagDTO } from './dtos/create-tag.dto';
import { TagsService } from './providers/tags.service';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post()
  public create(@Body() createTagsDto: CreateTagDTO) {
    return this.tagsService.create(createTagsDto);
  }
}
