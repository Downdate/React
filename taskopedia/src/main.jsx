import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

function HomePage() {
  return (
    <div>
      <h1>Dorood bar shoma!</h1>
      <div>Welcome to the React world!</div>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <h3>This is the footer brought to you by Dan</h3>
    </div>
  );
}

root.render(
  <div>
    <HomePage />
    <Footer />
  </div>,
);
