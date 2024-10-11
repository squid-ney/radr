/**
 * @param {import("knex").Knex} knex
 * @returns {Promise<void>}
 */
export async function up(knex) {
  // @ts-ignore
await knex.schema.createTable("variants", (table) => {
    table.increments("variant_id");
    table.text("gene");
    table.string("chromosome");
    table.text("position");
    table.text("ref");
    table.text("alt");
    table.text("gh37_gdna_coordinates");
    table.text("hgvsg");
    table.text("hgvsp");
    table.text("hgvsp_brief");
    table.text("exonic_function");
    table.text("region");
    table.text("mutation_type");
    table.text("codon_change");
    table.text("transcript");
    table.text("strand");
    table.text("transvar_input");
    table.text("clinical_phenotype");
    table.text("clinical_phenotype_source");
    table.text("neuropathology_alzforum");
    table.text("info_transvar");
    table.text("dbsnp_id_clinvar");
    table.text("clinvar_allele_id");
    table.text("clinvar_review_status");
    table.text("clinvar_clinical_significance");
    table.text("intervar_classification");
    table.text("radr_classification");
    table.text("variant_classification_source");
    table.text("disease_specific_pathogenicities");
    table.text("odds_ratio_single_variant");
    table.text("odds_ratio_combined_variant");
    table.text("rvas");
    table.text("source");
});

/**
 * @param {import("knex").Knex} knex
 * @returns {Promise<void>}
 */
export async function down(knex) {
  return knex.schema.dropTable("variants");
}
