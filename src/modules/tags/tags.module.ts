import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagsService } from './providers/tags.service';
import { TagsController } from './tags.controller';
import { Tags } from './tags.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tags])],
  controllers: [TagsController],
  providers: [TagsService],
  exports: [TagsService],
})
export class TagsModule {}
