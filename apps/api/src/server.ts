/**
 * Local development only: starts HTTP server with app.listen().
 * Not used on Vercel — the serverless handler is api/index.ts.
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = parseInt(process.env.PORT ?? '3001', 10);
  await app.listen(port);
  console.log(`API running at http://localhost:${port}`);
}

bootstrap().catch((err) => {
  console.error(err);
  process.exit(1);
});
