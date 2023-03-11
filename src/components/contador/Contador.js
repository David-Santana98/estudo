
import { useState } from "react";
import './Contador.css';
export default function Contador(props) {
  const [cont, setCont] = useState(0);

  function incrementar() {
    setCont(cont + 1);
  }

  return (
    <div className="contador">
      <h1> {props.titulo}</h1>
      <h2> {cont} </h2>
      <button onClick={incrementar}> Incrementar </button>
    </div>
  );
}
