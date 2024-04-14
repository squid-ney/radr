export default {
  client: "mysql2",
  connection: {
    database: "radr",
    user: "radr-user",
    password: "password",
    port: "3307",
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
