import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";

const App = () => (
  <Router>
    <Home />
  </Router>
);

export default App;