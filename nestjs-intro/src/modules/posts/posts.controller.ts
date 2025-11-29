/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDTO } from './dtos/create-post.dto';
import { PostsService } from './providers/posts.service';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  public createPost(@Body() createPostDto: CreatePostDTO): {
    message: string;
    data: CreatePostDTO;
  } {
    return {
      message: 'Hitting a post request',
      data: createPostDto,
    };
  }

  @Get(':userId?')
  public getPosts(@Param('userId') userId: string) {
    return this.postsService.findAll(userId);
  }
}
