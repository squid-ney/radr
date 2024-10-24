import React, { useEffect, useState } from "react";
import {
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { variantFieldsToReadable } from "../../pages/utils";
import { Box, Typography, Tooltip, IconButton } from "@mui/material";
import useTheme from "@mui/system/useTheme";
import {InfoOutlined} from "@mui/icons-material";

export const VariantGrid = () => {
  const theme = useTheme();
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
      field: "exonic_function",
      headerName: variantFieldsToReadable["exonic_function"],
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
      field: "radr_classification",
      headerName: variantFieldsToReadable["radr_classification"],
      width: 150,
    },
  ];

  const CustomToolbar = () => {
    return (
        <GridToolbarContainer>
          <GridToolbarExport />
          <Tooltip
              title={
                <Typography variant="body1" component="p" style={{ fontSize: theme.spacing(1.5) }}>
                  Follow the HGVSg link for more details about each variant. You can filter and search the data in the grid by using the filters visible when hovering over the column header. Use the export button to download the data.
                </Typography>
              }
          >
            <IconButton>
              <InfoOutlined color={"primary"} />
            </IconButton>
          </Tooltip>
        </GridToolbarContainer>
    );
  };

  return (
      <Box  sx={{ height: '100%', width: '100%' }}>
        <DataGrid
            rows={variants}
            columns={columns as GridColDef[]}
            getRowId={(row) => row.variant_id}
            slots={{
              toolbar: CustomToolbar,
            }}
        />
      </Box>
  );
}
// sx={{ height: '100%', width: '100%' }}