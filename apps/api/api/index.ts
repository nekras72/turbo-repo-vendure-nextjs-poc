import type { VercelRequest, VercelResponse } from '@vercel/node';

let handler: ((req: VercelRequest, res: VercelResponse) => void) | null = null;

/**
 * Cached serverless handler: bootstraps NestJS once, then forwards all requests.
 * Do not call app.listen() — this runs inside Vercel serverless.
 */
export default async function (req: VercelRequest, res: VercelResponse): Promise<void> {
  if (!handler) {
    const { createHandler } = await import('../dist/main');
    handler = await createHandler();
  }
  return new Promise((resolve, reject) => {
    handler!(req, res);
    res.on('finish', resolve);
    res.on('error', reject);
  });
}
