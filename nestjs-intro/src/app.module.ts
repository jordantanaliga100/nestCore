import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { PostsModule } from './modules/posts/posts.module';
import { TempModule } from './modules/temp/temp.module';
import { UsersModule } from './modules/users/users.module';
import { SampleModule } from './modules/v11-sample/sample.module';

// Modules
@Module({
  imports: [
    // ConfigModule.forRoot({
    //   load: [appConfig],
    //   isGlobal: true,
    //   envFilePath: '.env.local',
    // }),
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

    SampleModule,
    UsersModule,
    PostsModule,
    AuthModule,
    TempModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
