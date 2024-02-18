/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('variants').del()
  await knex('variants').insert([
    {
      variant_id: 1,
      gene: 'BRCA1',
      chromosome: 17,
      position: '43044295',
      ref: 'A',
      alt: 'G',
      GH38_gDNA_coord: 'chr17:g.43044295',
      HgvsP: 'p.Arg1443Gln',
      mutation: 'missense',
      exonic_func_known_gene: 'exonic',
      region: 'coding',
      clinical_phenotype: 'Breast Cancer',
      pathogenecity_original: 'Pathogenic',
      neuropathology: null,
      info: 'Some additional information',
      dbSNP_id: 'rs80357406',
      clnallele_id: 'CLN000123456',
      clnsig: 'Pathogenic',
      intervar: 'Likely pathogenic',
      pathogenecity_revised: 'Likely benign',
      source: 'ClinVar'
    },
    {
      variant_id: 2,
      gene: 'TP53',
      chromosome: 17,
      position: '7577543',
      ref: 'G',
      alt: 'C',
      GH38_gDNA_coord: 'chr17:g.7577543',
      HgvsP: 'p.Arg273His',
      mutation: 'missense',
      exonic_func_known_gene: 'exonic',
      region: 'coding',
      clinical_phenotype: 'Li-Fraumeni syndrome',
      pathogenecity_original: 'Likely pathogenic',
      neuropathology: 'Tumor suppressor',
      info: 'Additional information goes here',
      dbSNP_id: 'rs28934576',
      clnallele_id: 'CLN000987654',
      clnsig: 'Likely pathogenic',
      intervar: 'Likely pathogenic',
      pathogenecity_revised: 'Likely benign',
      source: 'ClinVar'
    },
    {
      variant_id: 3,
      gene: 'EGFR',
      chromosome: 7,
      position: '55259515',
      ref: 'C',
      alt: 'T',
      GH38_gDNA_coord: 'chr7:g.55259515',
      HgvsP: 'p.Leu858Arg',
      mutation: 'missense',
      exonic_func_known_gene: 'exonic',
      region: 'coding',
      clinical_phenotype: 'Lung Cancer',
      pathogenecity_original: 'Likely benign',
      neuropathology: null,
      info: 'Some additional information',
      dbSNP_id: 'rs121913529',
      clnallele_id: 'CLN000987123',
      clnsig: 'Likely benign',
      pathogenecity_revised: 'Likely benign',
      intervar: 'Benign',
      source: 'ClinVar'
    }
  ]);
};
