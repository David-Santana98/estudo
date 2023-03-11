import './CartaoDiscord.css';
import { Link } from 'react-router-dom';

export default function CartaoDiscord(props) {
    return (
        <div className="cartao-discord">
        <img
          src={props.imagem} alt=""/>
        <h1>{props.titulo}</h1>
        <p>{props.descricao}</p>
        <Link to='/'> Voltar para home </Link>
      </div>
    )
    
}