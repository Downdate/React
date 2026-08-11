import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import ContactIndex from "./Components/ContactPages/ContactIndex";
import "bootstrap-icons/font/bootstrap-icons.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
      <Header />
      <ContactIndex />
      <Footer />
    </div>
  </StrictMode>,
);
