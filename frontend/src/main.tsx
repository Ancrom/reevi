import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/_nullstyle.scss";
import "./styles/_fonts.scss";
import "./styles/globals.scss";
import App from "./components/App/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
