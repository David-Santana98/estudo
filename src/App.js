
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Olá</h1> 
        <Link to='/contato'>Ir para contato</Link>       
        <Link to='/eventos'>Ir para eventos</Link>       
        <Link to='/varestado'>Ir para VarEstado</Link>       
      </header>
    </div>
  );
}

export default App;
