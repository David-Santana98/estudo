import { useState } from "react";
import "./Index.css";

export default function Calculadora() {
    const [qtd, setQtd] = useState(0);
    const [preco, setPreco] = useState(0);
    const [meia, setMeia] = useState(false);
    const [total, setTotal] = useState(0);

    function Calcular {
        let tot = 0;
        if (meia === true) {

        }else {
            
        }    
    }



  return (
    <div className="calculadora">
      <h1> Calculadora de Ingressos </h1>

      <div>
        <label>Quantidade:</label>

        <input type="text" onChange={e => setQtd(Number(e.target.value))}/>
      </div>
      <div>
        <label>Preço:</label>
        <input type="text" onChange={e =>setPreco(Number(e.target.value))} />
      </div>
      <div>
        <label>Meia</label> <input type="checkbox" onChange={e => setMeia(Number(e.target.checked))}/>
      </div>

      <div>
        <button> Calcular </button>
      </div>
    </div>
  );
}
