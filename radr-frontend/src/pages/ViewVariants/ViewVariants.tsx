import useTheme from "@mui/system/useTheme";
import React from "react";
import { VariantGrid } from "../../components/VariantGrid/VariantGrid";

export const ViewVariants = () => {
  const theme = useTheme();

  return (
      <div>
        <h2 style={{ fontSize: theme.spacing(3) }}>Variants</h2>
        <VariantGrid />
      </div>
  );
};