import knex, { Knex } from "knex";
import {RadrDatabase} from "../RadrDatabase";

export class PostgresDatabase implements RadrDatabase {
  db: Knex;

  constructor(client: any, conn: any) {
    const db = knex({
      client: client,
      connection: conn,
    });

    this.db = db;
  }

  getVariants(): Promise<any[]> {
    return this.db.select("*").from("variants");
  }

  getVariantById(id: number): Promise<any> {
    return this.db.select("*").from("variants").where({ variant_id: id }).first();
  }
}
