import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";

export const ViewVariant = () => {
  const [variant, setVariant] = useState({});
  const { variantID } = useParams();

  useEffect(() => {
    const fetchVariants = async () => {
      const request: Request = new Request(
        "http://localhost:9000/api/variant",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ variant_id: variantID }),
        }
      );

      await fetch(request)
        .then((res) => res.json())
        .then((body) => setVariant(body))
        .catch((err) => {
          console.log(err);
        });
    };
    fetchVariants();
  }, []);

  const geneticInfoFields: (keyof Variant)[] = [
    "gene",
    "chromosome",
    "position",
    "ref",
    "alt",
    "gh37_gdna_coordinates",
    "hgvsp",
  ];

  const pathogenecityInfoFields: (keyof Variant)[] = [
    "clinvar_clinical_significance",
    "radr_classification",
    "intervar_classification",
    "variant_classification_source"
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
