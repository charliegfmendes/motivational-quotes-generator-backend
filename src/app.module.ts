import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { OpenaiService } from './openai/openai.service';
import { OpenaiController } from './openai/openai.controller';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  controllers: [OpenaiController],
  providers: [OpenaiService],
})
export class AppModule {}
