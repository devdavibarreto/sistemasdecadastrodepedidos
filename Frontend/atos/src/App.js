import { useEffect, useState } from 'react';
import './App.css';
import {AiOutlineEdit,AiOutlineDelete} from "react-icons/ai";
import axios from "axios"
import logo from "../src/img/atoslogo.png"


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
        <AiOutlineEdit onClick={()=> edicaopedido(atos)} size={20} color='red'></AiOutlineEdit>
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
  await axios.post("http://localhost:3523/atos", {
    pedidos: pedido,
    descricao:descricao
  })
  getPedidos()
  setpedido("")
  setdescricao("")
}


async function edicaopedido(atos) {
  setpedidoselecionado(atos)
  edicaopedido1(atos)
  setpedido("")
  setdescricao("")
}

async function getPedidos() {
  const response = await axios.get("http://localhost:3523/atos")
  setPedidos(response.data)
}

async function edicaopedido1(atos) {
await axios.put("http://localhost:3523/atos", {
  id: atos.id,
  pedidos: pedido,
  descricao:descricao
})
setpedidoselecionado()
getPedidos()
setpedido("")
setdescricao("")
}


async function deletarPedido(atos) {
  await axios.delete(`http://localhost:3523/atos/${atos.id}`)
  
  getPedidos()
  
}

const [pedidos,setPedidos] = useState([])
const [pedido,setpedido] = useState("")
const [descricao,setdescricao] = useState("")
const [pedidoselecionado,setpedidoselecionado] = useState();


useEffect(()=>{
  getPedidos();
},[])


  return (
    <div className="App">
      <header className="container">
      <img className='logo' src={logo} alt="Dev Davi"/>
<div className='header'>

  <input 
  value={pedido}
  onChange={(event)=>{
    setpedido(event.target.value)
  }}
  className='inputName1'></input>
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


