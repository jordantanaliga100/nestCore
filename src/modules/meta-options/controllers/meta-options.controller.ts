import { Body, Controller, Post } from '@nestjs/common';
import { CreatePostMetaOptionsDTO } from '../dtos/create-post-metaOptions.dto';
import { MetaOptionsService } from '../providers/meta-options.service';

@Controller('meta-options')
export class MetaOptionsController {
  constructor(private readonly metaOptionsService: MetaOptionsService) {}

  @Post()
  public async create(
    @Body() createPostMetaOptionsDto: CreatePostMetaOptionsDTO,
  ) {
    return await this.metaOptionsService.create(createPostMetaOptionsDto);
  }
}
