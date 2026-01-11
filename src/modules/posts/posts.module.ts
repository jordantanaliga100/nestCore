import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetaOption } from '../meta-options/meta-options.entity';
import { UsersModule } from '../users/users.module';
import { PostsController } from './controllers/posts.controller';
import { Post } from './post.entity';
import { PostsService } from './providers/posts.service';

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([Post, MetaOption])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
