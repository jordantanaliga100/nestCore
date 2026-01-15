import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaginationModule } from '../../common/pagination/pagination.module';
import { MetaOption } from '../meta-options/meta-options.entity';
import { TagsModule } from '../tags/tags.module';
import { UsersModule } from '../users/users.module';
import { PostsController } from './controllers/posts.controller';
import { Post } from './post.entity';
import { PostsService } from './providers/posts.service';

@Module({
  imports: [
    UsersModule,
    TagsModule,
    TypeOrmModule.forFeature([Post, MetaOption]),
    PaginationModule,
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
