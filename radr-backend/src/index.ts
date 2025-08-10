import "dotenv/config";
import {RadrDatabase} from "../db/RadrDatabase.js";
import {PostgresDatabase} from "../db/postgres/database.js";
import {LokiDatabase} from "../db/loki/database.js";
import { Hono } from "hono";
import { cors } from "hono/cors";
import {DB_CLIENT, DB_CONNECTION} from "../db/postgres/dbConnection.js";

const app = new Hono();

let radrDatabase: RadrDatabase;

if(process.argv.includes("--postgres")){
  console.log("Using Postgres");
  radrDatabase = new PostgresDatabase(DB_CLIENT, DB_CONNECTION);
}
else{
  console.log("Using Loki");
  radrDatabase = new LokiDatabase();
}

app.use("*", cors({
  origin: ["http://localhost:3000", "https://radr-frontend.vercel.app"],
  allowHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"]
}));

app.get("/api", (c) => {
  return c.text("Hello, world!");
});

app.get("/api/variants", async (c) => {
  const variants = await radrDatabase.getVariants();
  return c.json(variants);
});

app.post("/api/variant", async (c) => {
  const { variant_id } = await c.req.json();
  const variant = await radrDatabase.getVariantById(variant_id);
  return c.json(variant);
});

export default app;

// Node.js server setup for local development only
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  import('@hono/node-server').then(({ serve }) => {
    const port = 8787;
    console.log(`Local development server running on port ${port}`);
    
    serve({
      fetch: app.fetch,
      port
    });
  });
}
