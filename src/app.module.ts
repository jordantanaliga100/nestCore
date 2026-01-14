import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import appConfig from './config/app.config';
import databaseConfig from './config/db.config';
import { AuthModule } from './modules/auth/auth.module';
import { MetaOptionsModule } from './modules/meta-options/meta-options.module';
import { PostsModule } from './modules/posts/posts.module';
import { TagsModule } from './modules/tags/tags.module';
import { UsersModule } from './modules/users/users.module';

const ENV = process.env.NODE_ENV;
// Modules
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig],
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
    }),

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
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        autoLoadEntities: configService.get<boolean>(
          'database.autoLoadEntities',
        ),
        synchronize: configService.get<boolean>('database.synchronize'),
        port: Number(configService.get<number>('database.port')),
        host: configService.get<string>('database.host'),
        username: configService.get<string>('database.user'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.name'),
      }),
    }),
    // using NORMAL Connection 🔴
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
