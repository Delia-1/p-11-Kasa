import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./pages/App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import Homepage from "./pages/Homepage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/main.scss";
import HousePage from "./pages/HousePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <App>
        <ErrorPage />
      </App>
    ),
    children: [
      {
        path: "/homepage",
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      { path: "/housepages/:housepageId", element: <HousePage /> },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
