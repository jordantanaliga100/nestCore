/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
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
  public createPost(@Body() createPostDto: CreatePostDTO) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all posts' })
  public async getAllPosts() {
    return this.postsService.findAll();
  }

  @Get(':postId')
  @ApiOperation({
    summary: 'This API endpoint gets the posts',
  })
  public async getPosts(@Param('postId', ParseIntPipe) postId: number) {
    const post = await this.postsService.find(postId);
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    return post;
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
    return this.postsService.update(patchPostsDto);
  }

  @Delete(':postId')
  public deletePost(@Param('postId', ParseIntPipe) postId: number) {
    return this.postsService.delete(postId);
  }
}
