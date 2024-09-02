import './App.css';
import {AiOutlineEdit,AiOutlineDelete} from "react-icons/ai";

const arraypedidos =[{pedidos: "burgão", descricao: "burgão00000000000", ordem: 1},
  {pedidos: "burgão", descricao: "burgão00000000000", ordem: 2}
]

const AtosPrincipal = ({atosBurguer})=>{
  return(
<div className="atosPrincipal">
{atosBurguer.map(atos =>{
  return (
    <div className="atosSegundos">
      <p>{atos.pedidos}</p>
      <p>{atos.descricao}</p>
      <p>{atos.ordem}</p>
     <button>
      <AiOutlineEdit size={20} color='red'></AiOutlineEdit>
      </button>
      <button>
      <AiOutlineDelete size={20} color='red'></AiOutlineDelete>
      </button>
       </div>
  )
})}


</div>
  );
};

export default function App() {
  return (
    <div className="App">
      <header className="container">

       <AtosPrincipal atosBurguer={arraypedidos}></AtosPrincipal>
     
      </header>
    </div>
  );
}


