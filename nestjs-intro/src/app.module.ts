import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SampleModule } from './modules/sample/sample.module';
import { UsersModule } from './modules/users/users.module';

// Modules
@Module({
  imports: [SampleModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
