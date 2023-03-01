import './CartaoDiscord.css';

export default function CartaoDiscord(props) {
    return (
        <div className="cartao-discord">
        <img
          src={props.imagem} alt=""/>
        <h1>{props.titulo}</h1>
        <p>{props.descricao}</p>
      </div>
    )
    
}