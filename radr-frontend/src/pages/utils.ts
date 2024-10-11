export interface Variant {
  variant_id: number;
  gene: string;
  hgvsg: string;
  hgvsp: string;
  hgvsp_brief: string;
  exonic_func_known_gene: string;
  transvar_input: string;
  clinical_phenotype: string;
  source: string;
  neuropathology: string;
  info: string;
  dbsnp_id: string;
  clnallele_id: string;
  clnrevstat: string;
  clnsig: string;
  intervar_and_evidence: string;
  pathogenecity_radr: string;
  chromosome: number;
  position: string;
  ref: string;
  alt: string;
  gh38_gdna_coord: string;
  mutation: string;
  region: string;
  pathogenecity_original: string;
}

type VariantFieldsToReadable = {
  [K in keyof Variant]: string;
};

export const variantFieldsToReadable: VariantFieldsToReadable = {
  variant_id: "Variant ID",
  gene: "Gene",
  hgvsg: "HGVSg",
  hgvsp: "HGVSp",
  hgvsp_brief: "HGVSp Brief",
  exonic_func_known_gene: "Exonic Function Known Gene",
  transvar_input: "Transvar Input",
  clinical_phenotype: "Clinical Phenotype",
  source: "Source",
  neuropathology: "Neuropathology",
  info: "Info",
  dbsnp_id: "DbSNP ID",
  clnallele_id: "Clnallele ID",
  clnrevstat: "Clnrevstat",
  clnsig: "Clnsig",
  intervar_and_evidence: "Intervar And Evidence",
  pathogenecity_radr: "Pathogenecity RADR",
  chromosome: "Chromosome",
  position: "Position",
  ref: "Ref",
  alt: "Alt",
  gh38_gdna_coord: "GH38_gDNA_coord",
  mutation: "Mutation",
  region: "Region",
  pathogenecity_original: "Pathogenecity Original",
};
