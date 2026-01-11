/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
    // find the author
    const author = await this.usersService.findOneById(createPostDto.authorId);

    if (!author) {
      throw new BadRequestException(`Can't create a post without a user `);
    } else {
      // create the post
      const post = this.postsRepository.create({
        ...createPostDto,
        author,
      });

      return await this.postsRepository.save(post);
    }
  }

  public async find(id: number) {
    const post = await this.postsRepository.findOne({
      where: { id },
      relations: { metaOptions: true }, // load bi-directional relation
    });
    if (!post) throw new NotFoundException('None Existing  ⚔️');
    return post;
  }

  public async findAll() {
    // get the user
    // const user = this.usersService.findOneById(userId);
    const posts = await this.postsRepository.find({
      relations: {
        metaOptions: true,
        author: true,
      },
    });
    return posts;
  }
  public async delete(id: number) {
    await this.find(id);

    await this.postsRepository.delete(id);
    return {
      status: `Post #${id} Successfully deleted`,
    };
  }
}
