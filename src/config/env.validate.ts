import Joi from 'joi';

export default Joi.object({
  // ===== APP =====
  NODE_ENV: Joi.string()
    .valid('development', 'test', 'production', 'staging')
    .required(),

  PORT: Joi.number().port().default(3000),

  API_VERSION: Joi.string().required(),

  // ===== DATABASE =====
  DB_HOST: Joi.string().required(),

  DB_PORT: Joi.number().port().required(),

  POSTGRES_USER: Joi.string().required(),

  POSTGRES_DB: Joi.string().required(),

  POSTGRES_PASSWORD: Joi.string().required(),

  DATABASE_SYNC: Joi.boolean().default(false),

  DATABASE_AUTOLOAD: Joi.boolean().default(true),

  // ===== PROFILE =====
  PROFILE_API_KEY: Joi.string().required(),
});
