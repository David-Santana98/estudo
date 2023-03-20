import { useState } from "react";
import { Link } from "react-router-dom";


export default function Renderizacao() {
  const [num, setNum] = useState(0);
  const [exibir, setExibir] = useState(false);

  function Incr() {
    setNum(num + 1);
  }

  function Abrir() {
    setExibir(true);

  }

  return (
    <div>
      <h1>Biscoito da Sorte</h1>
      
      <button onClick={Abrir}>Abrir biscoito da sorte </button>

        {exibir === true &&
        <div>
            <h2>Você ganhou um carro!!!</h2> 
            <h3>Uma Ferrari!!</h3>
        </div>
        }

      <hr/>

      <h2>{num}</h2>

      <button onClick={Incr}>Incr.</button>
      <br/>
      <br/>
      <Link to='/'> Voltar para home </Link>
    </div>
  );
}
