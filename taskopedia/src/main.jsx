import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const root = createRoot(document.getElementById("root"));

function HomePage() {
  return (
    <div>
      <h1>Dorood bar shoma!</h1>
      <div>Welcome to the React world!</div>
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1
        className= "customHeading"
      >
        React Application Header
      </h1>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>
        This is the footer brought to you by Dan
      </h3>
    </div>
  );
}

root.render(
  <div>
    <Header />
    <HomePage />
    <Footer />
  </div>,
);
