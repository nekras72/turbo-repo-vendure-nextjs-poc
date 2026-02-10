import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';
import { defineConfig } from 'vite';
import { vendureDashboardPlugin } from '@vendure/dashboard/vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: '/dashboard/',
  build: {
    outDir: './dist/dashboard',
    emptyOutDir: true,
  },
  plugins: [
    vendureDashboardPlugin({
      vendureConfigPath: pathToFileURL(join(__dirname, 'src/vendure-config.ts')).href,
      api: { host: 'http://localhost', port: 3000 },
      gqlOutputPath: './src/gql',
    }),
  ],
});
