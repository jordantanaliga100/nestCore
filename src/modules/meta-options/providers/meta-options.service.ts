import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostMetaOptionsDTO } from '../dtos/create-post-metaOptions.dto';
import { MetaOption } from '../meta-options.entity';

@Injectable()
export class MetaOptionsService {
  constructor(
    @InjectRepository(MetaOption)
    private readonly metaOptionsRepository: Repository<MetaOption>,
  ) {}

  public async create(createPostMetaOptions: CreatePostMetaOptionsDTO) {
    const metaOption = this.metaOptionsRepository.create(createPostMetaOptions);

    return await this.metaOptionsRepository.save(metaOption);
  }
}
