import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import All from "./pages/All";
import Create from "./pages/Create";
import Index from "./pages";

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "Create/",
        element: <Create />,
      },
      {
        path: `/`,
        element: <Index />,
        children: [
          {
            path: "All/",
            element: <All />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
