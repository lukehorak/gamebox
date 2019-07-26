// Update with your config settings.
require ('dotenv').config({
  path:__dirname+'/.env'
});

// console.log("**********************", __dirname + '/.env')
// console.log(process.env)
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
    // connection: {
    //   database: process.env.PROD_DATABASE_NAME,
    //   user:     process.env.PROD_DATABASE_USER,
    //   password: process.env.PROD_DATABASE_PASSWORD
    // },
    connection: "postgres://ltvgbqiepsqvjx:063be30f1999c3c613c5592eb776c37dc933c8c14fc9c8c226560387a08a11a7@ec2-107-20-167-241.compute-1.amazonaws.com:5432/db80ed865kblfq",
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
