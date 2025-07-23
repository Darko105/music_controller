import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";

const App = () => (
  <Router>
    <Home />
  </Router>
);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
