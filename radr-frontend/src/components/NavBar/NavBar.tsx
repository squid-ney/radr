import React from "react";
import { Typography, AppBar } from "@mui/material";

export const NavBar = () => {
  return (
    <AppBar color="primary">
      <Typography variant="h3" component="h1">
        RADR
      </Typography>
      <Typography variant="caption" component="h2">
        Repository for ADRD-associated Rare Variants
      </Typography>
    </AppBar>
  );
};
