import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./pages/App.jsx";
import ErrorPage from "./ErrorPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import Homepage from "./pages/Homepage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/main.scss";
import HousePage from "./pages/HousePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        // Rajouter la rediretion vers le param id du logement
        path: "/homepage",
        element: <Homepage />,
      },
      { path: "/homepage/housepages/:housepageId", element: <HousePage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
