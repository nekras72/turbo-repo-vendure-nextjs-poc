import path from 'path';

import {
  DefaultJobQueuePlugin,
  DefaultSearchPlugin,
  dummyPaymentHandler,
  VendureConfig,
} from '@vendure/core';
import { DefaultLogger, LogLevel } from '@vendure/core';
import { AssetServerPlugin } from '@vendure/asset-server-plugin';
import { GraphiqlPlugin } from '@vendure/graphiql-plugin';
import { DashboardPlugin } from '@vendure/dashboard/plugin';

// Load env from .env (dotenv is installed)
require('dotenv').config();

const port = parseInt(process.env.PORT ?? '3000', 10);

export const config: VendureConfig = {
  apiOptions: {
    hostname: 'localhost',
    port,
    adminApiPath: 'admin-api',
    shopApiPath: 'shop-api',
    shopApiPlayground: true,
    adminApiPlayground: true,
  },
  authOptions: {
    tokenMethod: 'cookie',
    requireVerification: true,
    cookieOptions: {
      secret: process.env.COOKIE_SECRET ?? 'change-me-in-production',
    },
    superadminCredentials: {
      identifier: process.env.SUPERADMIN_USERNAME ?? 'superadmin',
      password: process.env.SUPERADMIN_PASSWORD ?? 'superadmin',
    },
  },
  dbConnectionOptions: {
    type: 'sqlite',
    database: path.join(__dirname, '../vendure.sqlite'),
    synchronize: true,
  },
  paymentOptions: {
    paymentMethodHandlers: [dummyPaymentHandler],
  },
  logger: new DefaultLogger({ level: LogLevel.Info }),
  plugins: [
    DefaultSearchPlugin,
    AssetServerPlugin.init({
      route: 'assets',
      assetUploadDir: path.join(__dirname, '../static/assets'),
    }),
    DefaultJobQueuePlugin,
    GraphiqlPlugin.init({
      route: 'graphiql',
    }),
    DashboardPlugin.init({
      route: 'dashboard',
      appDir: path.join(__dirname, '../dist/dashboard'),
    }),
  ],
};
