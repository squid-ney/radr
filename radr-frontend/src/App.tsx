import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/AppLayout/AppLayout";
import { ViewVariant } from "./pages/ViewVariant/ViewVariant";
import { ViewVariants } from "./pages/ViewVariants/ViewVariants";
import { Variant } from "./pages/utils";

const mockVariant: Variant = {
  variant_id: 1,
  gene: "BRCA1",
  chromosome: 17,
  position: "43044295",
  ref: "A",
  alt: "G",
  GH38_gDNA_coord: "chr17:g.43044295",
  HgvsP: "p.Arg1443Gln",
  mutation: "missense",
  exonic_func_known_gene: "exonic",
  region: "coding",
  clinical_phenotype: "Breast Cancer",
  pathogenecity_original: "Pathogenic",
  neuropathology: "",
  info: "Some additional information",
  dbSNP_id: "rs80357406",
  clnallele_id: "CLN000123456",
  clnsig: "Pathogenic",
  intervar_and_evidence: "Likely pathogenic",
  pathogenecity_revised: "Likely benign",
  source: "ClinVar",
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <ViewVariants />,
      },
      {
        path: "/variant/:variantID",
        element: <ViewVariant variant={mockVariant} />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
