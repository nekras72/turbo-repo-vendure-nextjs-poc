import { bootstrap } from '@vendure/core';
import { config } from './vendure-config';

bootstrap(config)
  .then(() => {
    // Server is running
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
