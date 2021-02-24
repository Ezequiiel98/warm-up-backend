module.exports = {
  DB_NAME: process.env.DB_NAME || 'default_db',
  DB_USER: process.env.DB_USER || 'root',
  DB_PASSWORD: process.env.DB_PASSWORD || 'root',
  DB_PORT: process.env.DB_PORT || '3306',
  DB_HOST: process.env.DB_HOST || 'localhost',
  PORT_APP: process.env.APP_PORT || '3000',
  NODE_ENV: process.env.NODE_ENV,
  ENV_IS_DEV: process.env.NODE_ENV === 'dev',
};
