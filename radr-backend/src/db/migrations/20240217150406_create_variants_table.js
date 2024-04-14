/**
 * @param {import("knex").Knex} knex
 * @returns {Promise<void>}
 */
export async function up(knex) {
  // @ts-ignore
  await knex.schema.createTable("variants", (table) => {
    table.increments("variant_id");
    table.string("gene");
    table.string("hgvsg");
    table.string("hgvsp");
    table.string("hgvsp_brief");
    table.string("exonic_func_known_gene");
    table.string("transvar_input");
    table.string("clinical_phenotype");
    table.string("source");
    table.string("neuropathology");
    table.string("info"); // TODO: find descriptive name
    table.string("dbsnp_id");
    table.string("clnallele_id");
    table.string("clnrevstat");
    table.string("clnsig");
    table.string("intervar_and_evidence");
    table.string("pathogenecity_radr");
    table.integer("chromosome");
    table.string("position");
    table.string("ref");
    table.string("alt");
    table.string("gh38_gdna_coord");
    table.string("mutation");
    table.string("region");
    table.string("pathogenecity_original");
  });
}

/**
 * @param {import("knex").Knex} knex
 * @returns {Promise<void>}
 */
export async function down(knex) {
  return knex.schema.dropTable("variants");
}
