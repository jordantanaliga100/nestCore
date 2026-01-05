/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDTO } from '../dtos/create-post.dto';
import { PatchPostDTO } from '../dtos/patch-post.dto';
import { PostsService } from '../providers/posts.service';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @ApiOperation({
    summary: 'This API endpoint creates a new blog post',
  })
  @ApiResponse({
    status: 201,
    description: 'You get a 201 response if your post is created sucessfully',
  })
  public createPost(@Body() createPostDto: CreatePostDTO): {
    message: string;
    data: CreatePostDTO;
  } {
    return {
      message: 'Hitting a post request',
      data: createPostDto,
    };
  }

  @Get('/:userId?')
  @ApiOperation({
    summary: 'This API endpoint gets the posts',
  })
  public getPosts(@Param('userId') userId: string) {
    return this.postsService.findAll(userId);
  }

  @Patch()
  @ApiOperation({
    summary: 'This API endpoint updates an existing post',
  })
  @ApiResponse({ status: 200, description: 'Post updated successfully' })
  @ApiResponse({ status: 400, description: 'Validation failed / Bad Request' })
  @ApiResponse({ status: 404, description: 'Post not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  public updatePost(@Body() patchPostsDto: PatchPostDTO) {
    console.log(patchPostsDto);
  }
}
