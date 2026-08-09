import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./Layout/Header";
import HomePage from "./Layout/HomePage";
import Footer from "./Layout/Footer";
import Dweller from "./Layout/Dweller";
import DwellerReview from "./Layout/DwellerReview";

const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <Header />
    <HomePage />
    <Dweller dwellerName="Alice" role="Resident" />
    <DwellerReview />
    <Dweller dwellerName="Bob" role="Resident" />
    <DwellerReview />
    <Dweller dwellerName="Charlie" role="Guard" />
    <DwellerReview />
    <Footer />
  </div>,
);
