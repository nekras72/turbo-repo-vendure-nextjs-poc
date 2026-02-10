import path from 'path';

import {
  AssetServerPlugin,
  DefaultJobQueuePlugin,
  DefaultSearchPlugin,
  dummyPaymentHandler,
  VendureConfig,
} from '@vendure/core';
import { DefaultLogger, LogLevel } from '@vendure/core';
import { GraphiQLPlugin } from '@vendure/graphiql-plugin';
import { DashboardPlugin } from '@vendure/dashboard';

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
    GraphiQLPlugin.init({
      route: 'graphiql',
      playground: true,
    }),
    DashboardPlugin.init({
      route: 'dashboard',
      port,
    }),
  ],
};
