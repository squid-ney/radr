import React, { useEffect, useState } from "react";
import {
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { Link } from "react-router-dom";

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

  const columns: GridColDef[] = [
    {
      field: "variant_id",
      headerName: "Variant ID",
      width: 150,
      renderCell: (rowData) => (
        <Link to={`/variant/${rowData.row.variant_id}`}>
          {rowData.row.variant_id}
        </Link>
      ),
    },
    { field: "gene", headerName: "Gene", width: 150 },
    { field: "chromosome", headerName: "Chromosome", width: 150 },
    { field: "position", headerName: "Position", width: 150 },
    { field: "ref", headerName: "Ref", width: 150 },
    { field: "alt", headerName: "Alt", width: 150 },
    { field: "GH38_gDNA_coord", headerName: "GH38_gDNA_coord", width: 150 },
    { field: "HgvsP", headerName: "HgvsP", width: 150 },
    { field: "mutation", headerName: "Mutation", width: 150 },
    {
      field: "exonic_func_known_gene",
      headerName: "Exonic Function Known Gene",
      width: 150,
    },
    { field: "region", headerName: "Region", width: 150 },
    {
      field: "clinical_phenotype",
      headerName: "Clinical Phenotype",
      width: 150,
    },
    {
      field: "pathogenecity_original",
      headerName: "Pathogenecity Original",
      width: 150,
    },
    { field: "neuropathology", headerName: "Neuropathology", width: 150 },
    { field: "info", headerName: "Info", width: 150 },
    { field: "dbSNP_id", headerName: "DbSNP_id", width: 150 },
    { field: "clnallele_id", headerName: "Clnallele ID", width: 150 },
    { field: "clnsig", headerName: "Clnsig", width: 150 },
    {
      field: "intervar_and_evidence",
      headerName: "Intervar And Evidence",
      width: 150,
    },
    {
      field: "pathogenecity_revised",
      headerName: "Pathogenecity Revised",
      width: 150,
    },
    { field: "source", headerName: "Source", width: 150 },
  ];
  const CustomToolbar = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  };

  return (
    <DataGrid
      rows={variants}
      columns={columns as GridColDef[]}
      getRowId={(row) => row.variant_id}
      slots={{
        toolbar: CustomToolbar,
      }}
    />
  );
};
