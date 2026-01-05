import { Module } from '@nestjs/common';
import { TempController } from './controllers/temp/temp.controller';
import { TempService } from './services/temp/temp.service';

@Module({
  controllers: [TempController],
  providers: [TempService],
})
export class TempModule {}
