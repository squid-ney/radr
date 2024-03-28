export interface Variant {
  variant_id: number;
  gene: string;
  chromosome: number;
  position: string;
  ref: string;
  alt: string;
  GH38_gDNA_coord: string;
  HgvsP: string;
  mutation: string;
  exonic_func_known_gene: string;
  region: string;
  clinical_phenotype: string;
  pathogenecity_original: string;
  neuropathology: string;
  info: string;
  dbSNP_id: string;
  clnallele_id: string;
  clnsig: string;
  intervar_and_evidence: string;
  pathogenecity_revised: string;
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
  GH38_gDNA_coord: "GH38_gDNA_coord",
  HgvsP: "HgvsP",
  mutation: "Mutation",
  exonic_func_known_gene: "Exonic Function Known Gene",
  region: "Region",
  clinical_phenotype: "Clinical Phenotype",
  pathogenecity_original: "Pathogenecity Original",
  neuropathology: "Neuropathology",
  info: "Info",
  dbSNP_id: "DbSNP_id",
  clnallele_id: "Clnallele ID",
  clnsig: "Clnsig",
  intervar_and_evidence: "Intervar And Evidence",
  pathogenecity_revised: "Pathogenecity Revised",
  source: "Source",
};
