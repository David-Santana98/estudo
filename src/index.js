import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Contato from "./Contato";
import Discord from "./discord";
import Eventos from "./Eventos";
import VarEstado from "./VarEstado";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/discord" element={<Discord />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/varestado" element={<VarEstado />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
