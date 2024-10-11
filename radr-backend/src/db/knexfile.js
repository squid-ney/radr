export default {
  client: "mysql2",
  connection: {
    database: "radr",
    user: process.env.username,
    password: process.env.password,
    port: process.env.port,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
