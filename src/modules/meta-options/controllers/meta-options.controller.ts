import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostMetaOptionsDTO } from '../dtos/create-post-metaOptions.dto';
import { MetaOptionsService } from '../providers/meta-options.service';

@ApiTags('Meta Options')
@Controller('meta-options')
export class MetaOptionsController {
  constructor(private readonly metaOptionsService: MetaOptionsService) {}

  @Post()
  @ApiOperation({
    summary: 'This API endpoint creates a new meta-option for a post',
  })
  @ApiResponse({
    status: 201,
    description:
      'You get a 201 response if your meta-option is created sucessfully',
  })
  public async create(
    @Body() createPostMetaOptionsDto: CreatePostMetaOptionsDTO,
  ) {
    return await this.metaOptionsService.create(createPostMetaOptionsDto);
  }
}
