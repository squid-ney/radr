import { DB_CLIENT, DB_CONNECTION} from './constants'
// Update with your config settings.
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: DB_CLIENT,
    connection: DB_CONNECTION,
    migrations: {
      tableName: 'knex_migrations'
    }
  },

};
