import { useEffect, useState } from 'react';
import './App.css';
import {AiOutlineEdit,AiOutlineDelete} from "react-icons/ai";
import axios from "axios"


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
async function getPedidos() {
  const response = await axios.get("http://localhost:3523/atos")
  setPedidos(response.data)
}

const [pedidos,setPedidos] = useState([])
useEffect(()=>{
  getPedidos();
},[])

  return (
    <div className="App">
      <header className="container">
<div className='header'>
  <input className='inputName'></input>
  <input className='inputName'></input>
  <button className='newPedidoRegister'>Registrar</button>
</div>
       <AtosPrincipal atosBurguer={pedidos}></AtosPrincipal>
       
     
      </header>
    </div>
  );
}


