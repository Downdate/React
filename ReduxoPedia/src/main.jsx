import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "../src/Layouts/Header";
import Footer from "../src/Layouts/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />

    <Footer />
  </StrictMode>,
);
