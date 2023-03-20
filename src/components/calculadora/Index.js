import { useEffect, useState } from "react";
import "./Index.css";

export default function Calculadora() {
  const [qtd, setQtd] = useState(1);
  const [preco, setPreco] = useState(10);
  const [meia, setMeia] = useState(false);
  const [total, setTotal] = useState(10);

  useEffect(() => {
    Calcular();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qtd, preco, meia]);

  function Calcular() {
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

        <input
          type="text"
          value={qtd}
          onChange={(e) => setQtd(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Preço:</label>
        <input
          type="text"
          value={preco}
          onChange={(e) => setPreco(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Meia</label>{" "}
        <input
          type="checkbox"
          checked={meia}
          onChange={(e) => setMeia(e.target.checked)}
        />
      </div>

      <div>
        <button onClick={Calcular}> Calcular </button>
        <h4>R$:{total} </h4>
      </div>
    </div>
  );
}
