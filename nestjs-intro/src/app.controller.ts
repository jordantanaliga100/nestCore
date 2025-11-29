import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  healthCheck(): { status: string; uptime: number; date: Date } {
    return {
      status: 'ALIVE 🚀',
      uptime: process.uptime(),
      date: new Date(Date.now()),
    };
  }
  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
