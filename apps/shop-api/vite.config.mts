import path from 'path';
import { fileURLToPath } from 'node:url';
import { pathToFileURL } from 'node:url';
import { defineConfig } from 'vite';
import { vendureDashboardPlugin } from '@vendure/dashboard/vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: '/dashboard/',
  build: {
    outDir: './dist/dashboard',
    emptyOutDir: true,
  },
  plugins: [
    vendureDashboardPlugin({
      vendureConfigPath: pathToFileURL(path.join(__dirname, 'src/vendure-config.ts')).href,
      api: { host: 'http://localhost', port: 3000 },
      gqlOutputPath: './src/gql',
    }),
  ],
});
