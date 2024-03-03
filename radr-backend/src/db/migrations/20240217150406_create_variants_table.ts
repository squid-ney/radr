import { Knex } from "knex";

exports.up = async function (knex: Knex) {
  // @ts-ignore
  await knex.schema.createTable("variants", (table) => {
    table.increments("variant_id");
    table.string("gene");
    table.integer("chromosome");
    table.string("position");
    table.string("ref");
    table.string("alt");
    table.string("GH38_gDNA_coord");
    table.string("HgvsP");
    table.string("mutation");
    table.string("exonic_func_known_gene");
    table.string("region");
    table.string("clinical_phenotype");
    table.string("pathogenecity_original"); // Is this relevant to the db?
    table.string("neuropathology");
    table.string("info"); // what is this?
    table.string("dbSNP_id");
    table.string("clnallele_id");
    table.string("clnsig");
    table.string("intervar_and_evidence"); // intervar and evidence?
    table.string("pathogenecity_revised");
    table.string("source");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex: Knex) {
  return knex.schema.dropTable("variants");
};
