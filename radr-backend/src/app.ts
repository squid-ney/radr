import "dotenv/config";
import {RadrDatabase} from "./db/RadrDatabase";
import {PostgresDatabase} from "./db/postgres/database.js";
import {LokiDatabase} from "./db/loki/database.js";
import express, { Request, Response } from "express";
import {DB_CLIENT, DB_CONNECTION} from "./db/postgres/dbConnection.js";
const app = express();

let radrDatabase: RadrDatabase;

if(process.argv.includes("--postgres")){
  console.log("Using Postgres");
  radrDatabase = new PostgresDatabase(DB_CLIENT, DB_CONNECTION);
}
else{
  console.log("Using Loki");
  radrDatabase = new LokiDatabase();
}

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
  const variants = await radrDatabase.getVariants()
  res.send(variants);
});

app.post("/api/variant", async (req: Request, res: Response) => {
  const { variant_id } = req.body;
  const variant = await radrDatabase.getVariantById(variant_id);
  res.send(variant);
});

app.listen(9000, () => {
  console.log("Server listening on port 9000");
});
