import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  root() {
    return { message: 'NestJS API (Vercel serverless)', ok: true };
  }

  @Get('health')
  health() {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }
}
