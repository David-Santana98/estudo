import './Contato.css';
import { Link } from 'react-router-dom';

export default function Contato() {
    return (
        <div className='contato'>
            <h1>Contato</h1>
            <p>Deixe seu contato e retornaremos para você.</p>
             <label>Email:</label>
            <input type="email" /><br /><br />
            <Link to='/'> Voltar para home </Link>
        </div>
    )
}