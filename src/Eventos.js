import "./Eventos.css";
import { Link } from "react-router-dom";

export default function Eventos() {
  function ola() {
    alert("Oláaaaa");
  }

  function alterar(e) {
    alert("alterouuuu!" + e.target.value);
  }
  return (
    <div className="eventos">
      <h1> Eventos </h1>

      <input type="text" onChange={alterar} />
      <br />
      <br />
      <button onClick={ola}>Clique Aqui</button>
      <br />
      <br />
      <Link to="/"> Voltar para home </Link>
    </div>
  );
}
