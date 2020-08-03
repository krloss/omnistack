// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './knex/db.sqlite3'
    },
    migrations: {
      directory: './knex/migrations'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: './knex/test.sqlite3'
    },
    migrations: {
      directory: './knex/migrations'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'be_the_hero',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'be_the_hero',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
