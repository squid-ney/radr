export default {
  client: "mysql2",
  connection: {
    database: "radr",
    user: 'radr-user',//process.env.username,
    password: 'jaiwj28ru823hefh', //process.env.password,
    port: 3307 //process.env.port,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
