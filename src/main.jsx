import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import App from "./pages/App.jsx";
import { ErrorPage } from "./ErrorPage.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
