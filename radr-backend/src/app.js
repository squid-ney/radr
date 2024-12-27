"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const database_js_1 = require("./db/database.js");
const dbConnection_js_1 = require("./db/dbConnection.js");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const knexDB = new database_js_1.Database(dbConnection_js_1.DB_CLIENT, dbConnection_js_1.DB_CONNECTION).getDB();
app.use(express_1.default.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get("/api", (req, res) => {
    res.send("Hello, world!");
});
app.get("/api/variants", async (req, res) => {
    const results = await knexDB.select("*").from("variants");
    res.send(results);
});
app.post("/api/variant", async (req, res) => {
    const { variant_id } = req.body;
    const variant = await knexDB
        .select("*")
        .from("variants")
        .where({ variant_id })
        .first();
    res.send(variant);
});
app.listen(9000, () => {
    console.log("Server listening on port 9000");
});
