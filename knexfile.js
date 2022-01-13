// Update with your config settings.

module.exports = {

    client: 'postgresql',
    connection: {
      connectionString: "postgres://cehrbtgfkbulaw:9e7ac8360470027be91f55cb8237044adacdcb97d2e9112bc9b8fc64c67afe68@ec2-54-211-74-66.compute-1.amazonaws.com:5432/d6dett0j1an4q7",
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }

};
