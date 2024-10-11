<<<<<<< Updated upstream
import { Home } from "./pages/Home";
import { Typography, AppBar } from "@mui/material";
import { Box, styled } from "@mui/system";
=======
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/AppLayout/AppLayout";
import { ViewVariant } from "./pages/ViewVariant/ViewVariant";
import { ViewVariants } from "./pages/ViewVariants/ViewVariants";
import { Home } from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/variants",
        element: <ViewVariants />,
      },
      {
        path: "/variant/:variantID",
        element: <ViewVariant />,
      },
    ],
  },
]);
>>>>>>> Stashed changes

const Content = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(10),
}));
function App() {
  return (
    <div className="App">
      <AppBar color="primary">
        <Typography variant="h3" component="h1">
          RADR
        </Typography>
      </AppBar>
      <Content>
        <Home />
      </Content>
    </div>
  );
}

export default App;
