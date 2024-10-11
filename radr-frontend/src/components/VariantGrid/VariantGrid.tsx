import React, { useEffect, useState } from "react";
import {
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { variantFieldsToReadable } from "../../pages/utils";

export const VariantGrid = () => {
  const [variants, setVariants] = useState([]);
  useEffect(() => {
    const fetchVariants = async () => {
      await fetch("http://localhost:9000/api/variants")
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
      field: "hgvsg",
      headerName: variantFieldsToReadable["hgvsg"],
      width: 150,
      renderCell: (rowData) => (
        <Link to={`/variant/${rowData.row.variant_id}`}>
          {rowData.row.hgvsg}
        </Link>
      ),
    },
    { field: "gene", headerName: variantFieldsToReadable["gene"], width: 150 },
    {
      field: "hgvsp",
      headerName: variantFieldsToReadable["hgvsp"],
      width: 150,
    },
    {
      field: "hgvsp_brief",
      headerName: variantFieldsToReadable["hgvsp_brief"],
      width: 150,
    },
    {
      field: "exonic_func_known_gene",
      headerName: variantFieldsToReadable["exonic_func_known_gene"],
      width: 250,
    },
    {
      field: "clinical_phenotype",
      headerName: variantFieldsToReadable["clinical_phenotype"],
      width: 150,
    },
    {
      field: "source",
      headerName: variantFieldsToReadable["source"],
      width: 150,
    },
    {
      field: "pathogenecity_radr",
      headerName: variantFieldsToReadable["pathogenecity_radr"],
      width: 150,
    },
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
