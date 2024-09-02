import { useEffect, useState } from 'react';
import './App.css';
import {AiOutlineEdit,AiOutlineDelete} from "react-icons/ai";
import axios from "axios"




export default function App() {

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
        <AiOutlineDelete onClick={()=> deletarPedido(atos)} size={20} color='red'></AiOutlineDelete>
        </button>
         </div>
    )
  })}
  
  
  </div>
    );
  };

async function handleNewPedido() {
  const response =await axios.post("http://localhost:3523/atos", {
    pedidos: pedido,
    descricao:descricao
  })
  getPedidos()
}

async function getPedidos() {
  const response = await axios.get("http://localhost:3523/atos")
  setPedidos(response.data)
}
async function deletarPedido(atos) {
  const response = await axios.delete(`http://localhost:3523/atos/${atos.id}`)
  
  getPedidos()
}

const [pedidos,setPedidos] = useState([])
const [pedido,setpedido] = useState("")
const [descricao,setdescricao] = useState("")
useEffect(()=>{
  getPedidos();
},[])

  return (
    <div className="App">
      <header className="container">
<div className='header'>
  <input 
  value={pedido}
  onChange={(event)=>{
    setpedido(event.target.value)
  }}
  className='inputName'></input>
  <input
  value={descricao}
  onChange={(event)=>{
    setdescricao(event.target.value)
  }}
  className='inputName'></input>
  <button onClick={handleNewPedido} className='newPedidoRegister'>Registrar</button>
</div>
       <AtosPrincipal atosBurguer={pedidos}></AtosPrincipal>
       
     
      </header>
    </div>
  );
}


