import React from "react";
import { createRoot } from "react-dom/client";
import PageOne from "./pages/PageOne.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PageOne />
  </React.StrictMode>
);