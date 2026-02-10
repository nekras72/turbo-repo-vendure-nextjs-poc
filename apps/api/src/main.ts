import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import type { INestApplication } from '@nestjs/common';
import type { Request, Response } from 'express';
import { AppModule } from './app.module';

let cachedApp: INestApplication | null = null;

/**
 * Create and cache the NestJS app. Does NOT call app.listen() — for serverless.
 * Returns the Express request handler to forward (req, res) to.
 */
export async function createHandler(): Promise<(req: Request, res: Response) => void> {
  if (cachedApp) {
    const express = cachedApp.getHttpAdapter().getInstance();
    return (req: Request, res: Response) => express(req, res);
  }
  const app = await NestFactory.create(AppModule, new ExpressAdapter(), {
    bodyParser: true,
  });
  // Optional: enable CORS for web app origin
  app.enableCors({
    origin: process.env.CORS_ORIGIN ?? true,
    credentials: true,
  });
  await app.init();
  cachedApp = app;
  const express = app.getHttpAdapter().getInstance();
  return (req: Request, res: Response) => express(req, res);
}
