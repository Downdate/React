import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import MainLayout from "./Layouts/MainLayout";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <MainLayout />
      <main className="container flex-grow-1 d-flex flex-column">
        <AppRouter/>
      </main>
      <footer
        className="mt-auto py-3 border-top text-center text-muted"
        style={{ width: "100%" }}
      >
        <p className="mb-0">
          2026 React Router Demo. Built with Love and React Router.
        </p>
      </footer>
    </div>
  );
}

export default App;
