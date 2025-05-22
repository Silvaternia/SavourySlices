// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/routes";

import "./index.css";

createRoot(document.getElementById("root")!).render(<RouterProvider router={AppRoutes} />);
