import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { MetaOptionsModule } from './modules/meta-options/meta-options.module';
import { PostsModule } from './modules/posts/posts.module';
import { TagsModule } from './modules/tags/tags.module';
import { UsersModule } from './modules/users/users.module';
// Modules
@Module({
  imports: [
    // ConfigModule.forRoot({
    //   load: [appConfig],
    //   isGlobal: true,
    //   envFilePath: '.env.local',
    // }),
    // ConfigModule.forRoot({
    //   load: [appConfig],
    //   isGlobal: true,
    //   envFilePath: '.env.local',
    // }),

    // using Synchronous Connection 🔴
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   entities: [],
    //   synchronize: true,
    //   port: 5432,
    //   host: 'db',
    //   username: 'postgres',
    //   password: 'secret',
    //   database: 'nestjs_blog',
    // }),

    //  using Asynchronous Connection 🟢
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: () => ({
        type: 'postgres',
        autoLoadEntities: true,
        synchronize: true,
        port: 5432,
        host: 'db',
        username: 'postgres',
        password: 'secret',
        database: 'nestjs_blog',
      }),
    }),

    // TypeOrmModule.forRootAsync({
    //   imports: [],
    //   inject: [],
    //   useFactory: () => ({
    //     type: 'postgres',
    //     entities: [User],
    //     synchronize: process.env.NODE_ENV === 'development',

    //     host: process.env.DB_HOST || 'db', // 👈 use 'db' as default
    //     port: +process.env.DB_PORT! || 5432,
    //     username: process.env.POSTGRES_USER,
    //     password: process.env.POSTGRES_PASSWORD,
    //     database: process.env.POSTGRES_DB,
    //   }),
    // }),

    UsersModule,
    PostsModule,
    AuthModule,
    TagsModule,
    MetaOptionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
