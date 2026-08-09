import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Counter from "./Counter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
      <Header />
      <Counter />
      <Footer />
    </div>
  </StrictMode>,
);
