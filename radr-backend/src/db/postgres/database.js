"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresRadrDatabase = void 0;
const knex_1 = __importDefault(require("knex"));
class PostgresRadrDatabase {
    constructor(client, conn) {
        const db = (0, knex_1.default)({
            client: client,
            connection: conn,
        });
        this.db = db;
    }
    getVariants() {
        return this.db.select("*").from("variants");
    }
    getVariantById(id) {
        return this.db.select("*").from("variants").where({ variant_id: id }).first();
    }
}
exports.PostgresRadrDatabase = PostgresRadrDatabase;
