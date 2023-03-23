import "./Filme.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Filme() {
  const [filme, setFilme] = useState("");
  const [resultado, setResultado] = useState([]);

  async function buscar() {
    let r = await axios.get("http://omdbapi.com/?apikey=d43a5114&s=" + filme);
    setResultado(r.data.Search);
  }

  return (
    <div className="home">
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
      <section className="lista">
        {resultado?.map((item) => (
          <div className="cartao-filme">
            <img src={item.Poster} alt="" />
            <div>
              <h1>{item.Title}</h1>
              <h2>Lançado em {item.Year}</h2>
              <p>Cód. imdb: {item.imdbID}</p>
            </div>
          </div>
        ))}
      </section>
      <Link to="/"> Voltar para home </Link>
    </div>
  );
}
