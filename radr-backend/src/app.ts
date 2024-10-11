import "dotenv/config";
import { Database } from "./db/database.js";
import { DB_CONNECTION, DB_CLIENT } from "./db/dbConnection.js";
import express, { Request, Response } from "express";
const app = express();

const knexDB = new Database(DB_CLIENT, DB_CONNECTION).getDB();

app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api", (req, res) => {
  res.send("Hello, world!");
});

app.get("/api/variants", async (req, res) => {
  const results = await knexDB.select("*").from("variants");
  res.send(results);
});

app.post("/api/variant", async (req: Request, res: Response) => {
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
