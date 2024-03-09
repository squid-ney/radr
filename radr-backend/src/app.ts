import "dotenv/config";
import { Database } from "./db/database.js";
import { DB_CONNECTION, DB_CLIENT } from "./db/dbConnection.js";
import express from "express";
const app = express();

const knexDB = new Database(DB_CLIENT, DB_CONNECTION).getDB();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/variants", async (req, res) => {
  const results = await knexDB.select("*").from("variants");
  res.send(results);
});

app.listen(9000, () => {
  console.log("Server listening on port 9000");
});
