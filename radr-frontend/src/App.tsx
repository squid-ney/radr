import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/AppLayout/AppLayout";
import { ViewVariant } from "./pages/ViewVariant/ViewVariant";
import { ViewVariants } from "./pages/ViewVariants/ViewVariants";
import "./App.css";

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
        element: <ViewVariant />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
