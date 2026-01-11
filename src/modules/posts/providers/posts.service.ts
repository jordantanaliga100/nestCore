/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MetaOption } from '../../meta-options/meta-options.entity';
import { UsersService } from '../../users/providers/users.service';
import { CreatePostDTO } from '../dtos/create-post.dto';
import { Post } from '../post.entity';

@Injectable()
export class PostsService {
  // injecting usersService
  constructor(
    @InjectRepository(MetaOption)
    private readonly metaOptionsRepository: Repository<MetaOption>,

    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,

    /**
     * Inject  service
     */
    private readonly usersService: UsersService,
  ) {}

  public async create(createPostDto: CreatePostDTO) {
    // create the post
    const post = this.postsRepository.create({ ...createPostDto });

    return await this.postsRepository.save(post);
  }

  public async findAll(userId: string) {
    console.log(userId);
    // get the user
    const user = this.usersService.findOneById(userId);
    const posts = await this.postsRepository.find({
      // relations: {
      //   metaOptions: true,
      // },
    });
    return posts;
  }
}
