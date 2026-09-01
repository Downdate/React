import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "../src/Layouts/Header";
import Footer from "../src/Layouts/Footer";
import { store } from "./redux/Store";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import DestinationList from "./components/DestinationList";
import DestinationFact from "./components/DestinationFact";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <div className="d-flex flex-column min-vh-100">
        <Header />

        <main className="flex-grow-1 row">
          <div className="col-12">
            <Counter />
            <div className="p-3 m-4 border">
              <h4 className="text-center pb-4 text-success">Destinations</h4>
              <DestinationList />
              <DestinationFact />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </Provider>
  </StrictMode>,
);
