import React from "react";
import { Variant, variantFieldsToReadable } from "../utils";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Grid,
} from "@mui/material";

export const ViewVariant = ({ variant }: { variant: Variant }) => {
  // const entries = Object.entries(variant);
  const geneticInfoFields: (keyof Variant)[] = [
    "gene",
    "chromosome",
    "position",
    "ref",
    "alt",
    "GH38_gDNA_coord",
    "HgvsP",
  ];
  const pathogenecityInfoFields: (keyof Variant)[] = [
    "pathogenecity_original",
    "pathogenecity_revised",
    "intervar_and_evidence",
    "clnsig",
  ];
  const additionalInfoFields: (keyof Variant)[] = (
    Object.keys(variant) as (keyof Variant)[]
  ).filter(
    (key) => ![...geneticInfoFields, ...pathogenecityInfoFields].includes(key)
  );

  return (
    <>
      <h2>Variant Details</h2>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TableContainer component={Paper}>
            <h3>Genomic Information </h3>
            <Table aria-label="simple table">
              <TableBody>
                {geneticInfoFields.map((field) => (
                  <TableRow key={field}>
                    <TableCell>{variantFieldsToReadable[field]}</TableCell>
                    <TableCell>{variant[field]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item xs={6}>
          <TableContainer component={Paper}>
            <h3>Pathogenecity</h3>
            <Table aria-label="simple table">
              <TableBody>
                {pathogenecityInfoFields.map((field) => (
                  <TableRow key={field}>
                    <TableCell>{variantFieldsToReadable[field]}</TableCell>
                    <TableCell>{variant[field]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <h3>Additional Details</h3>
            <Table aria-label="simple table">
              <TableBody>
                {additionalInfoFields.map((field) => (
                  <TableRow key={field}>
                    <TableCell>{variantFieldsToReadable[field]}</TableCell>
                    <TableCell>{variant[field]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};
