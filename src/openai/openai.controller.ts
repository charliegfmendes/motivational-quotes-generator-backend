import { Controller, Get } from '@nestjs/common';
import { OpenaiService } from './openai.service';

@Controller('quote')
export class OpenaiController {
  constructor(private readonly openaiService: OpenaiService) {}

  @Get('generate')
  async generateQuote() {
    const quote = await this.openaiService.generateMotivationalQuote();
    return { quote };
  }
}
