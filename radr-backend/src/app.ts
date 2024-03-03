import "dotenv/config";
import { Database } from "./db/database.js";
import { DB_CONNECTION, DB_CLIENT } from "./db/dbConnection.js";
import express from "express";
const app = express();

const knexDB = new Database(DB_CLIENT, DB_CONNECTION).getDB();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/variants", async (req, res) => {
  const hi = "hi";
  const results = await knexDB.select("*").from("variants");
  res.send(results);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
