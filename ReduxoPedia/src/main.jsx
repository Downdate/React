import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "../src/Layouts/Header";
import Footer from "../src/Layouts/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="flex-grow-1">Main content</main>

      <Footer />
    </div>
  </StrictMode>,
);
