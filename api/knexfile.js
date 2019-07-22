// Update with your config settings.
require ('dotenv').config();
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DEV_DATABASE_NAME,
      user:     process.env.DEV_DATABASE_USER,
      password: process.env.DEV_DATABASE_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations/development',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './db/seeds/development'
    }
  },


  production: {
    client: 'postgresql',
    connection: {
      database: process.env.PROD_DATABASE_NAME,
      user:     process.env.PROD_DATABASE_USER,
      password: process.env.PROD_DATABASE_PASSWORD
    },
    pool: {
      min: 2,
      max: 20
    },
    migrations: {
      directory: './db/migrations/production',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './db/seeds/production'
    }
  }
};
