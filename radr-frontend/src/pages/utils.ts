export interface Variant {
  variant_id: number;
  gene: string;
  chromosome: string;
  position: string;
  ref: string;
  alt: string;
  gh37_gdna_coordinates: string;
  hgvsg: string;
  hgvsp: string;
  hgvsp_brief: string;
  exonic_function: string;
  region: string;
  mutation_type: string;
  codon_change: string;
  transcript: string;
  strand: string;
  transvar_input: string;
  clinical_phenotype: string;
  clinical_phenotype_source: string;
  neuropathology_alzforum: string;
  info_transvar: string;
  dbsnp_id_clinvar: string;
  clinvar_allele_id: string;
  clinvar_review_status: string;
  clinvar_clinical_significance: string;
  intervar_classification: string;
  radr_classification: string;
  variant_classification_source: string;
  disease_specific_pathogenicities: string;
  odds_ratio_single_variant: string;
  odds_ratio_combined_variant: string;
  rvas: string;
  source: string;
}

type VariantFieldsToReadable = {
  [K in keyof Variant]: string;
};

export const variantFieldsToReadable: VariantFieldsToReadable = {
  variant_id: "Variant ID",
  gene: "Gene",
  chromosome: "Chromosome",
  position: "Position",
  ref: "Ref",
  alt: "Alt",
  gh37_gdna_coordinates: "GH37 gDNA Coordinates",
  hgvsg: "HGVSg",
  hgvsp: "HGVSp",
  hgvsp_brief: "HGVSp Brief",
  exonic_function: "Exonic Function",
  region: "Region",
  mutation_type: "Mutation Type",
  codon_change: "Codon Change",
  transcript: "Transcript",
  strand: "Strand",
  transvar_input: "Transvar Input",
  clinical_phenotype: "Clinical Phenotype",
  clinical_phenotype_source: "Clinical Phenotype Source",
  neuropathology_alzforum: "Neuropathology Alzforum",
  info_transvar: "Info Transvar",
  dbsnp_id_clinvar: "DbSNP ID ClinVar",
  clinvar_allele_id: "ClinVar Allele ID",
  clinvar_review_status: "ClinVar Review Status",
  clinvar_clinical_significance: "ClinVar Clinical Significance",
  intervar_classification: "InterVar Classification",
  radr_classification: "RADR Classification",
  variant_classification_source: "Variant Classification Source",
  disease_specific_pathogenicities: "Disease Specific Pathogenicities",
  odds_ratio_single_variant: "Odds Ratio (Single Variant)",
  odds_ratio_combined_variant: "Odds Ratio (Combined Variant)",
  rvas: "RVAS",
  source: "Source",
};
