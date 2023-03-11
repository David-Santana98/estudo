import "./Index.css";

export default function Calculadora() {
  return (
    <div className="calculadora">
      <h1> Calculadora de Ingressos </h1>

      <div>
        <label>Quantidade:</label>

        <input type="text" />
      </div>
      <div>
        <label>Preço:</label>
        <input type="text" />
      </div>
      <div>
        <label>Meia</label> <input type="checkbox" />
      </div>

      <div>
        <button> Calcular </button>
      </div>
    </div>
  );
}
