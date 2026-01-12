import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTagDTO } from '../dtos/create-tag.dto';
import { Tags } from '../tags.entity';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tags)
    private readonly tagsRepository: Repository<Tags>,
  ) {}

  public async create(createTagDto: CreateTagDTO) {
    const tags = this.tagsRepository.create(createTagDto);
    return await this.tagsRepository.save(tags);
  }
}
