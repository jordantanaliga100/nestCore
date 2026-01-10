import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetaOptionsController } from './meta-options.controller';
import { MetaOption } from './meta-options.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MetaOption])],
  controllers: [MetaOptionsController],
})
export class MetaOptionsModule {}
