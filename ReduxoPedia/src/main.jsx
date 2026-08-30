import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "../src/Layouts/Header";
import Footer from "../src/Layouts/Footer";
import { store } from "./redux/Store";
import { Provider } from "react-redux";
import Counter from "./components/Counter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <div className="d-flex flex-column min-vh-100">
        <Header />

        <main className="flex-grow-1 row">
          <div className="col-12">
            <Counter />
          </div>
        </main>

        <Footer />
      </div>
    </Provider>
  </StrictMode>,
);
