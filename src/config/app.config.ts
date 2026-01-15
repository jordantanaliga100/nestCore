// export default () => ({
//   port: parseInt(process.env.PORT || '3000', 10),
//   apiVersion: process.env.API_VERSION || 'v1',
//   nodeEnv: process.env.NODE_ENV || 'development',
//   logLevel: process.env.LOG_LEVEL || 'debug',
// });

import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  apiVersion: process.env.API_VERSION,
  environment: process.env.NODE_ENV,
  port: parseInt(process.env.PORT || '3000'),
}));
