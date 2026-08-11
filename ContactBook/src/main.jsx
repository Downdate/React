import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import ContactIndex from "./Components/ContactPages/ContactIndex";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
      <Header />
      <ContactIndex />
      <Footer />
    </div>
  </StrictMode>,
);
