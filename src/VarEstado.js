import { useState } from 'react';
import './VarEstado.css';
import { Link } from 'react-router-dom';
import Contador from './components/contador/Contador.js';
import Calculadora from './components/calculadora/Index.js';



export default function VarEstado() {
    //como declarar uma variável de estado
    const [nome, setNome] = useState('');

    function alterarNome(e) {
        setNome(e.target.value);
    }

    return (
        <div className='estado'>
            <h1> Variável de Estado </h1>
            
            <h3>Aluno</h3>
            <input type="text" onChange={alterarNome} />
            <br />
            <br />
            Seja bem-vindo {nome}

            <hr />

            <div>
                <Contador titulo="Passos" />
                <Contador titulo="Bugs"/>
                <Contador titulo="Dias"/>
                <Contador titulo="Férias"/>
             </div>
              
             <hr/>

             <div>
                <Calculadora />
             </div>   

             <br/>
             <Link to='/'> Voltar para home </Link>
        </div>

    )
    
}