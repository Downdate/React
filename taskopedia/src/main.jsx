import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Header from "./Layout/Header";
import HomePage from "./Layout/HomePage";
import Footer from "./Layout/Footer";
import Dweller from "./Layout/Dweller";

const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <Header />
    <HomePage />
    <Dweller />
    <Footer />
  </div>,
);
