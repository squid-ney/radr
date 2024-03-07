import knex, { Knex } from "knex";

export class Database {
  db: Knex;

  constructor(client: any, conn: any) {
    const db = knex({
      client: client,
      connection: conn,
    });

    this.db = db;
  }

  getDB() {
    return this.db;
  }
}
