import { Link } from "react-router-dom";

export default function Correio() {
  return (
    <div>
      <h1>Correio</h1>

      <div>Informe seu CEP:</div>
      <div>
        <input type="text" />
        <button> Buscar</button>
      </div>
      <div>
        <h3></h3>
      </div>

      <Link to='/'> Voltar para home </Link>
    </div>
  );
}
