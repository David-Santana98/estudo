import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Filme() {
  const [filme, setFilme] = useState("");
  const [resultado, setResultado] = useState([]);

  function buscar() {}

  return (
    <div>
      <h1>Filme</h1>

      <div>Pesquise pelo nome do filme:</div>
      <div>
        <input
          type="text"
          value={filme}
          onChange={(e) => setFilme(e.target.value)}
        />
        <button onClick={buscar}>Buscar</button>
      </div>
      <div>
        <h3>{resultado}</h3>
      </div>
      <Link to="/"> Voltar para home </Link>
    </div>
  );
}
