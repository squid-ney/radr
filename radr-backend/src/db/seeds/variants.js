export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("variants").del();
  await knex("variants").insert([
    {
      variant_id: 101,
      gene: "BRCA1",
      hgvsg: "NM_007294.4:c.81G>T",
      hgvsp: "p.Gly29Cys",
      hgvsp_brief: "G29C",
      exonic_func_known_gene: "missense_variant",
      transvar_input: "ENST00000357654.9:c.81G>T",
      clinical_phenotype: "Breast cancer",
      source: "ClinVar",
      neuropathology: "Normal",
      info: "Variant of uncertain significance",
      dbsnp_id: "rs80357322",
      clnallele_id: "CLN123456",
      clnrevstat: "criteria_provided_conflicting_interpretations",
      clnsig: "Uncertain significance",
      intervar_and_evidence: "Pathogenic (ClinVar), Benign (ClinVar)",
      pathogenecity_radr: "Not provided",
      chromosome: 17,
      position: "43067834",
      ref: "G",
      alt: "T",
      gh38_gdna_coord: "chr17:g.43067834G>T",
      mutation: "G>T",
      region: "exonic",
      pathogenecity_original: "Uncertain",
    },
    {
      variant_id: 102,
      gene: "TP53",
      hgvsg: "NM_000546.5:c.818G>A",
      hgvsp: "p.Arg273His",
      hgvsp_brief: "R273H",
      exonic_func_known_gene: "missense_variant",
      transvar_input: "ENST00000269305.9:c.818G>A",
      clinical_phenotype: "Li-Fraumeni syndrome",
      source: "ClinVar",
      neuropathology: "Normal",
      info: "Pathogenic variant associated with Li-Fraumeni syndrome",
      dbsnp_id: "rs28934574",
      clnallele_id: "CLN123457",
      clnrevstat: "criteria_provided_conflicting_interpretations",
      clnsig: "Pathogenic",
      intervar_and_evidence: "Pathogenic (ClinVar)",
      pathogenecity_radr: "Not provided",
      chromosome: 17,
      position: "7577120",
      ref: "G",
      alt: "A",
      gh38_gdna_coord: "chr17:g.7577120G>A",
      mutation: "G>A",
      region: "exonic",
      pathogenecity_original: "Pathogenic",
    },
    {
      variant_id: 103,
      gene: "EGFR",
      hgvsg: "NM_005228.4:c.2369C>T",
      hgvsp: "p.Thr790Met",
      hgvsp_brief: "T790M",
      exonic_func_known_gene: "missense_variant",
      transvar_input: "ENST00000275493.5:c.2369C>T",
      clinical_phenotype: "Non-small cell lung cancer",
      source: "ClinVar",
      neuropathology: "Normal",
      info: "Drug resistant mutation in EGFR",
      dbsnp_id: "rs121913529",
      clnallele_id: "CLN123458",
      clnrevstat: "criteria_provided_conflicting_interpretations",
      clnsig: "Likely pathogenic",
      intervar_and_evidence: "Pathogenic (ClinVar)",
      pathogenecity_radr: "Not provided",
      chromosome: 7,
      position: "55249071",
      ref: "C",
      alt: "T",
      gh38_gdna_coord: "chr7:g.55249071C>T",
      mutation: "C>T",
      region: "exonic",
      pathogenecity_original: "Likely pathogenic",
    },
    {
      variant_id: 104,
      gene: "APC",
      hgvsg: "NM_000038.6:c.3920T>A",
      hgvsp: "p.Tyr1307Asn",
      hgvsp_brief: "Y1307N",
      exonic_func_known_gene: "missense_variant",
      transvar_input: "ENST00000257430.6:c.3920T>A",
      clinical_phenotype: "Familial adenomatous polyposis",
      source: "ClinVar",
      neuropathology: "Normal",
      info: "Variant associated with familial adenomatous polyposis",
      dbsnp_id: "rs121913498",
      clnallele_id: "CLN123459",
      clnrevstat: "criteria_provided_conflicting_interpretations",
      clnsig: "Pathogenic",
      intervar_and_evidence: "Pathogenic (ClinVar)",
      pathogenecity_radr: "Not provided",
      chromosome: 5,
      position: "112175029",
      ref: "T",
      alt: "A",
      gh38_gdna_coord: "chr5:g.112175029T>A",
      mutation: "T>A",
      region: "exonic",
      pathogenecity_original: "Pathogenic",
    },
    {
      variant_id: 105,
      gene: "BRCA2",
      hgvsg: "NM_000059.3:c.5946del",
      hgvsp: "p.Tyr1982Ter",
      hgvsp_brief: "Y1982*",
      exonic_func_known_gene: "frameshift_variant",
      transvar_input: "ENST00000380152.8:c.5946del",
      clinical_phenotype: "Breast cancer",
      source: "ClinVar",
      neuropathology: "Normal",
      info: "Pathogenic frameshift variant",
      dbsnp_id: "rs80357082",
      clnallele_id: "CLN123460",
      clnrevstat: "criteria_provided_conflicting_interpretations",
      clnsig: "Pathogenic",
      intervar_and_evidence: "Pathogenic (ClinVar)",
      pathogenecity_radr: "Not provided",
      chromosome: 13,
      position: "32316471",
      ref: "-",
      alt: "del",
      gh38_gdna_coord: "chr13:g.32316471del",
      mutation: "del",
      region: "exonic",
      pathogenecity_original: "Pathogenic",
    },
    {
      variant_id: 106,
      gene: "MLH1",
      hgvsg: "NM_000249.3:c.791_793del",
      hgvsp: "p.Leu264del",
      hgvsp_brief: "L264del",
      exonic_func_known_gene: "inframe_deletion",
      transvar_input: "ENST00000231700.9:c.791_793del",
      clinical_phenotype: "Lynch syndrome",
      source: "ClinVar",
      neuropathology: "Normal",
      info: "Pathogenic inframe deletion",
      dbsnp_id: "rs63750449",
      clnallele_id: "CLN123461",
      clnrevstat: "criteria_provided_conflicting_interpretations",
      clnsig: "Pathogenic",
      intervar_and_evidence: "Pathogenic (ClinVar)",
      pathogenecity_radr: "Not provided",
      chromosome: 3,
      position: "37091783",
      ref: "CTT",
      alt: "-",
      gh38_gdna_coord: "chr3:g.37091783_37091785delCTT",
      mutation: "delCTT",
      region: "exonic",
      pathogenecity_original: "Pathogenic",
    },
    {
      variant_id: 107,
      gene: "VHL",
      hgvsg: "NM_000551.3:c.437G>T",
      hgvsp: "p.Arg146Leu",
      hgvsp_brief: "R146L",
      exonic_func_known_gene: "missense_variant",
      transvar_input: "ENST00000379370.3:c.437G>T",
      clinical_phenotype: "Von Hippel-Lindau syndrome",
      source: "ClinVar",
      neuropathology: "Normal",
      info: "Pathogenic missense variant",
      dbsnp_id: "rs121913491",
      clnallele_id: "CLN123462",
      clnrevstat: "criteria_provided_conflicting_interpretations",
      clnsig: "Pathogenic",
      intervar_and_evidence: "Pathogenic (ClinVar)",
      pathogenecity_radr: "Not provided",
      chromosome: 3,
      position: "101981858",
      ref: "G",
      alt: "T",
      gh38_gdna_coord: "chr3:g.101981858G>T",
      mutation: "G>T",
      region: "exonic",
      pathogenecity_original: "Pathogenic",
    },
    {
      variant_id: 108,
      gene: "RET",
      hgvsg: "NM_020975.5:c.2753T>C",
      hgvsp: "p.Leu918Pro",
      hgvsp_brief: "L918P",
      exonic_func_known_gene: "missense_variant",
      transvar_input: "ENST00000355710.4:c.2753T>C",
      clinical_phenotype: "Multiple endocrine neoplasia type 2",
      source: "ClinVar",
      neuropathology: "Normal",
      info: "Likely pathogenic missense variant",
      dbsnp_id: "rs267606665",
      clnallele_id: "CLN123463",
      clnrevstat: "criteria_provided_conflicting_interpretations",
      clnsig: "Likely pathogenic",
      intervar_and_evidence: "Pathogenic (ClinVar)",
      pathogenecity_radr: "Not provided",
      chromosome: 10,
      position: "43531040",
      ref: "T",
      alt: "C",
      gh38_gdna_coord: "chr10:g.43531040T>C",
      mutation: "T>C",
      region: "exonic",
      pathogenecity_original: "Likely pathogenic",
    },
    {
      variant_id: 109,
      gene: "SDHD",
      hgvsg: "NM_003002.4:c.274G>A",
      hgvsp: "p.Gly92Asp",
      hgvsp_brief: "G92D",
      exonic_func_known_gene: "missense_variant",
      transvar_input: "ENST00000349868.8:c.274G>A",
      clinical_phenotype: "Hereditary paraganglioma-pheochromocytoma syndrome",
      source: "ClinVar",
      neuropathology: "Normal",
      info: "Likely pathogenic missense variant",
      dbsnp_id: "rs121918487",
      clnallele_id: "CLN123464",
      clnrevstat: "criteria_provided_conflicting_interpretations",
      clnsig: "Likely pathogenic",
      intervar_and_evidence: "Pathogenic (ClinVar)",
      pathogenecity_radr: "Not provided",
      chromosome: 11,
      position: "111957356",
      ref: "G",
      alt: "A",
      gh38_gdna_coord: "chr11:g.111957356G>A",
      mutation: "G>A",
      region: "exonic",
      pathogenecity_original: "Likely pathogenic",
    },
    {
      variant_id: 110,
      gene: "NF1",
      hgvsg: "NM_000267.3:c.2970+1G>A",
      hgvsp: "-",
      hgvsp_brief: "-",
      exonic_func_known_gene: "splice_acceptor_variant",
      transvar_input: "ENST00000267196.5:c.2970+1G>A",
      clinical_phenotype: "Neurofibromatosis type 1",
      source: "ClinVar",
      neuropathology: "Normal",
      info: "Likely pathogenic splice variant",
      dbsnp_id: "rs397509400",
      clnallele_id: "CLN123465",
      clnrevstat: "criteria_provided_conflicting_interpretations",
      clnsig: "Likely pathogenic",
      intervar_and_evidence: "Pathogenic (ClinVar)",
      pathogenecity_radr: "Not provided",
      chromosome: 17,
      position: "29524584",
      ref: "G",
      alt: "A",
      gh38_gdna_coord: "chr17:g.29524584G>A",
      mutation: "G>A",
      region: "exonic",
      pathogenecity_original: "Likely pathogenic",
    },
  ]);
}
