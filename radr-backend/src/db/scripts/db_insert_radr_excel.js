import { config } from "dotenv";
config({ path: "../../../.env" });
import pkg from "xlsx";
const { utils, readFile } = pkg;
import knex from "knex";

const conn = {
  host: "127.0.0.1",
  port: 3307,
  user: process.env.username,
  password: process.env.password,
  database: process.env.database,
};

const client = "mysql2";

const db = knex({
  client: client,
  connection: conn,
  debug: true,
  useNullAsDefault: true,
});

// Define the relevant columns for the database
const radrExcelColumns = [
  "Gene",
  "Chromosome",
  "Position",
  "Ref",
  "Alt",
  "GH37 gDNA coordinates",
  "HGVSg",
  "HGVSp [DELETE?]",
  "HGVSp_brief",
  "ExonicFunc.knownGene",
  "Region",
  "Mutation Type",
  "Transvar Input",
  "Clinical Phenotype [Double-check for ClinVar phenotype]",
  "Source",
  "Neuropathology",
  "Info",
  "dbSNP ID",
  "CLNALLELEID",
  "CLNREVSTAT",
  "CLNSIG",
  "Intervar Classification",
  "RADR Classification",
  "HGVSp",
  "Disease Specific Pathogenecities",
];

const workbook = readFile(
  "/Users/Sydney/Repositories/radr/radr-backend/src/db/scripts/RADR_8_22_2024_edited_raj_v3(Sheet1).csv"
);

const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

const jsonData = utils.sheet_to_json(worksheet);
const BATCH_SIZE = 10;

try {
  for (let i = 0; i < jsonData.length; i += BATCH_SIZE) {
    const batch = jsonData.slice(i, i + BATCH_SIZE);

    const insertData = batch.map((row) => ({
      ...row,
    }));

    await db("variants").insert(insertData);
  }
  console.log("Data inserted successfully");
} catch (error) {
  console.error("Error inserting data: ", error);
}
