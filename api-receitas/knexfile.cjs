require('dotenv').config();
module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST || '127.0.0.1',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || '',
      database: process.env.DB_NAME || 'receitas',
      timezone: 'Z'
    },
    migrations: { directory: './migrations' },
    seeds: { directory: './seeds' }
  }
};
