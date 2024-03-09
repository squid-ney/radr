import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export const VariantGrid = () => {
  const [variants, setVariants] = useState([]);
  useEffect(() => {
    const fetchVariants = async () => {
      await fetch("http://localhost:9000/variants")
        .then((res) => res.json())
        .then((body) => setVariants(body))
        .catch((err) => {
          console.log(err);
        });
    };
    fetchVariants();
  }, []);

  console.log({ variants });
  const columns: GridColDef[] = [
    { field: "variant_id", headerName: "Variant ID", width: 150 },
    { field: "gene", headerName: "Gene", width: 150 },
    { field: "chromosome", headerName: "Chromosome", width: 150 },
    { field: "position", headerName: "Position", width: 150 },
    { field: "ref", headerName: "Ref", width: 150 },
    { field: "alt", headerName: "Alt", width: 150 },
    { field: "GH38_gDNA_coord", headerName: "GH38_gDNA_coord", width: 150 },
    { field: "HgvsP", headerName: "HgvsP", width: 150 },
    { field: "mutation", headerName: "mutation", width: 150 },
    {
      field: "exonic_func_known_gene",
      headerName: "exonic_func_known_gene",
      width: 150,
    },
    { field: "region", headerName: "region", width: 150 },
    {
      field: "clinical_phenotype",
      headerName: "clinical_phenotype",
      width: 150,
    },
    {
      field: "pathogenecity_original",
      headerName: "pathogenecity_original",
      width: 150,
    },
    { field: "neuropathology", headerName: "neuropathology", width: 150 },
    { field: "info", headerName: "info", width: 150 },
    { field: "dbSNP_id", headerName: "dbSNP_id", width: 150 },
    { field: "clnallele_id", headerName: "clnallele_id", width: 150 },
    { field: "clnsig", headerName: "clnsig", width: 150 },
    {
      field: "intervar_and_evidence",
      headerName: "intervar_and_evidence",
      width: 150,
    },
    {
      field: "pathogenecity_revised",
      headerName: "pathogenecity_revised",
      width: 150,
    },
    { field: "source", headerName: "source", width: 150 },
  ];

  return (
    <DataGrid
      rows={variants}
      columns={columns as GridColDef[]}
      getRowId={(row) => row.variant_id}
    />
  );
};
