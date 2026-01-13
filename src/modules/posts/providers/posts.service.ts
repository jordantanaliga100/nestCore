/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MetaOption } from '../../meta-options/meta-options.entity';
import { TagsService } from '../../tags/providers/tags.service';
import { UsersService } from '../../users/providers/users.service';
import { CreatePostDTO } from '../dtos/create-post.dto';
import { PatchPostDTO } from '../dtos/patch-post.dto';
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
    private readonly tagsService: TagsService,
    private readonly usersService: UsersService,
  ) {}

  public async create(createPostDto: CreatePostDTO) {
    // find the author
    const author = await this.usersService.findOneById(createPostDto.authorId);
    // find tags

    const tags = await this.tagsService.findMultipleTags(
      createPostDto.tags || [],
    );
    if (!author) {
      throw new BadRequestException(`Can't create a post without a user `);
    } else {
      // create the post
      const post = this.postsRepository.create({
        ...createPostDto,
        author,
        tags,
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
        // author: true,
        // tags: true,
      },
    });
    return posts;
  }

  public async update(patchPostDto: PatchPostDTO) {
    console.log('this is for patch', patchPostDto);
    // return 'Patch  Request Hitted';
    // find the tags
    // const tags = await this.tagsService.findMultipleTags(
    //   patchPostDto.tags || [],
    // );
    // find the post
    const post = await this.postsRepository.findOneBy({ id: patchPostDto.id });

    if (!post) {
      throw new NotFoundException(`Post with ID ${patchPostDto.id} not found`);
    }
    // update the properties
    Object.assign(post, {
      title: patchPostDto.title,
      content: patchPostDto.content,
      status: patchPostDto.status,
      postType: patchPostDto.postType,
      slug: patchPostDto.slug,
      featuredImageUrl: patchPostDto.featuredImageUrl,
      publishOn: patchPostDto.publishOn,
    });
    // post?.title = patchPostDto.title ?? post?.title;
    // post?.content = patchPostDto.content ?? post?.content;
    // post?.status = patchPostDto.status ?? post?.status;
    // post?.postType = patchPostDto.postType ?? post?.postType;
    // post?.slug = patchPostDto.slug ?? post?.slug;
    // post?.featuredImageUrl =
    //   patchPostDto.featuredImageUrl ?? post?.featuredImageUrl;
    // post?.publishOn = patchPostDto.publishOn ?? post?.publishOn;

    // assign the new tags
    // post?.tags = tags;
    if (patchPostDto.tags) {
      const tags = await this.tagsService.findMultipleTags(patchPostDto.tags);
      post.tags = tags;
    }
    // save and return
    return await this.postsRepository.save(post);
  }

  public async delete(id: number) {
    await this.find(id);

    await this.postsRepository.delete(id);
    return {
      status: `Post #${id} Successfully deleted`,
    };
  }
}
