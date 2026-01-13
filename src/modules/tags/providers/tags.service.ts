import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreateTagDTO } from '../dtos/create-tag.dto';
import { Tag } from '../tags.entity';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagsRepository: Repository<Tag>,
  ) {}

  public async create(createTagDto: CreateTagDTO) {
    const tags = this.tagsRepository.create(createTagDto);
    return await this.tagsRepository.save(tags);
  }

  public async findMultipleTags(tags: number[]) {
    if (!tags || tags.length === 0) {
      return [];
    }
    const results = await this.tagsRepository.find({
      where: {
        id: In(tags),
      },
    });
    return results;
  }

  public async delete(tagId: number) {
    await this.tagsRepository.delete(tagId);
    return {
      deleted: true,
      tagId,
    };
  }

  public async softDelete(tagId: number) {
    await this.tagsRepository.softDelete(tagId);
    return {
      softDeleted: true,
      tagId,
    };
  }
}
