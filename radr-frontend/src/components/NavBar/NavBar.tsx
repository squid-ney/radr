import React from "react";
import { Typography, AppBar, Toolbar, Box, useTheme } from "@mui/material";

export const NavBar = () => {
  const theme = useTheme();

  return (
      <div style={{ display: "flex", padding: theme.spacing(2) }}>
        <AppBar color="primary">
          <Toolbar>
            <Box display="flex" alignItems="center">
              <Typography variant="h4" component="h1">
                RADR
              </Typography>
              <Typography variant="subtitle1" component="p" style={{ marginLeft: theme.spacing(1) }}>
                Repository of ADRD-Associated Rare Variants
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
  );
};