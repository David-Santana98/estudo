import { useState } from "react";

export default function Renderizacao() {
  const [num, setNum] = useState(0);

  function Incr() {
    setNum(num + 1);
  }

  return (
    <div>
      <h1>Renderização</h1>

      <h2>{num}</h2>

      <button onClick={Incr}>Incr.</button>
    </div>
  );
}
