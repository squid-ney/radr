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

// Define the updated relevant columns for the database
const radrExcelColumns = [
  "gene",
  "chromosome",
  "position",
  "ref",
  "alt",
  "gh37_gdna_coordinates",
  "hgvsg",
  "hgvsp",
  "hgvsp_brief",
  "exonic_function",
  "region",
  "mutation_type",
  "codon_change",
  "transcript",
  "strand",
  "transvar_input",
  "clinical_phenotype",
  "clinical_phenotype_source",
  "neuropathology_alzforum",
  "info_transvar",
  "dbsnp_id_clinvar",
  "clinvar_allele_id",
  "clinvar_review_status",
  "clinvar_clinical_significance",
  "intervar_classification",
  "radr_classification",
  "variant_classification_source",
  "disease_specific_pathogenicities",
  "odds_ratio_single_variant",
  "odds_ratio_combined_variant",
  "rvas",
  "source"
];

const workbook = readFile(
  "/Users/sydneynicoleachinger/Repositories/personal/radr/radr-backend/src/db/scripts/radr_data_10-11.csv"
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
