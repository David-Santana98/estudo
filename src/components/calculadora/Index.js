 import './Index.css';

 export default function Calculadora() {

    return (
        <div>
            <h1> Calculadora de Ingressos </h1>

            <div>
                Quantidade de Ingressos:
                <input type="text" />
            </div>
            <div>
                Preço:
                <input type="text" />
            </div>
            <div>
                Meia:
                <input type="checkbox" />
            </div>

            <div>
                <button> Calcular </button>
            </div>
        </div>
    )
 }