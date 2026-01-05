import { Module } from '@nestjs/common';
import { TempController } from './controllers/temp.controller';
import { TempService } from './services/temp.service';

@Module({
  controllers: [TempController],
  providers: [TempService],
})
export class TempModule {}
