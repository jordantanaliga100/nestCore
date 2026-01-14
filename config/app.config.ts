// export default () => ({
//   port: parseInt(process.env.PORT || '3000', 10),
//   apiVersion: process.env.API_VERSION || 'v1',
//   nodeEnv: process.env.NODE_ENV || 'development',
//   logLevel: process.env.LOG_LEVEL || 'debug',
// });

export const appConfig = () => ({
  environment: process.env.NODE_ENV,
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3000'),
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    name: process.env.POSTGRES_DB,
    synchronize: process.env.DATABASE_SYNC === 'true' ? true : false,
    autoLoadEntities: process.env.DATABASE_AUTOLOAD === 'true' ? true : false,
  },
});
