import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Correio() { 
  const [cep, setCep] =  useState('');
  const [resultado, setResultado] =  useState('');

  async function buscar() {
    const r = await axios.get('https://viacep.com.br/ws/' + cep + '/json/')

    setResultado(r.data.logradouro + ', ' + r.data.bairro + ' - ' + r.data.localidade);
  }

  return (
    <div>
      <h1>Correio</h1>

      <div>Informe seu CEP:</div>
      <div>
        <input type="text" value={cep} onChange={e => setCep(e.target.value)} />
        <button onClick={buscar}> Buscar</button>
      </div>
      <div>
          <h3> {resultado} </h3>
      </div>

      <Link to="/"> Voltar para home </Link>
    </div>
  );
}
