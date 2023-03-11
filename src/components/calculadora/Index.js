import { useState } from "react";
import "./Index.css";

export default function Calculadora() {
  const [qtd, setQtd] = useState(0);
  const [preco, setPreco] = useState(0);
  const [meia, setMeia] = useState(false);
  const [total, setTotal] = useState(0);

  function calcular() {
    let tot = 0;
    if (meia === true) {
      tot = (qtd * preco) / 2;
    } else {
      tot = qtd * preco;
    }
    setTotal(tot);
  }

  return (
    <div className="calculadora">
      <h1> Calculadora de Ingressos </h1>

      <div>
        <label>Quantidade:</label>

        <input type="text" onChange={(e) => setQtd(Number(e.target.value))} />
      </div>
      <div>
        <label>Preço:</label>
        <input type="text" onChange={(e) => setPreco(Number(e.target.value))} />
      </div>
      <div>
        <label>Meia</label>{" "}
        <input
          type="checkbox"
          onChange={(e) => setMeia(e.target.checked)}
        />
      </div>

      <div>
        <button onClick={calcular}> Calcular </button>
        <h4>R$:{total} </h4>
      </div>
    </div>
  );
}
