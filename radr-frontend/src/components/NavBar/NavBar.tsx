import React from "react";
import { Typography, AppBar, useTheme } from "@mui/material";

export const NavBar = () => {
  const theme = useTheme();

  return (
    <AppBar color="primary">
      <div style={{ padding: theme.spacing(2) }}>
        <Typography variant="h4" component="h1">
          RADR
        </Typography>
        <Typography variant="caption" component="h2">
          Repository for ADRD-Associated Rare Variants
        </Typography>
      </div>
    </AppBar>
  );
};
