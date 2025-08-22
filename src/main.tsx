import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "src/App";
import "src/index.css";

const root = document.getElementById("root")!;

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
