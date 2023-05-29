import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/reset.css";
import "./styles/global.css";
import TelaInicial from "./components/TelaInicial/TelaInicial";
import Topo from "./components/Topo/Topo";
import TelaPassagens from "./components/TelaPassagens/TelaPassagens";
import TelaHospedagens from "./components/TelaHospedagens/TelaHospedagens";
import TelaInfoPassagem from "./components/TelaInfoPassagem/TelaInfoPassagem";
import React from "react";
import TelaInfoHospedagem from "./components/TelaInfoHospedagem/TelaInfoHospedagem";

function App() {
  const [idCidadeSelecionada, setIdCidadeSelecionada] = React.useState(null);
  return (
    <BrowserRouter>
      <Topo />
      <Routes>
        <Route
          path="/"
          element={
            <TelaInicial setIdCidadeSelecionada={setIdCidadeSelecionada} />
          }
        />
        <Route path="/passagens/:idCidade" element={<TelaPassagens />} />
        <Route
          path="/passagem/:id"
          element={
            <TelaInfoPassagem idCidadeSelecionada={idCidadeSelecionada} />
          }
        />
        <Route
          path="/hospedagens/:idCidade"
          element={
            <TelaHospedagens idCidadeSelecionada={idCidadeSelecionada} />
          }
        />
        <Route
          path="/hospedagem/:id"
          element={
            <TelaInfoHospedagem idCidadeSelecionada={idCidadeSelecionada} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
