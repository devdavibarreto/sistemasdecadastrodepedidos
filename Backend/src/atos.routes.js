const express = require("express");

const pedido = [{pedidos: "", descricao: "", ordem: Number}]
let ordem = 0

const atos = express.Router();

atos.post("/CadastroDePedidos", (request,response) => {
 const {pedidos,descricao} = request.body;
let novoPedido = {pedidos,descricao}


ordem++


 novoPedido = {pedidos,descricao,ordem}

 pedido.push(novoPedido)

return response.status(201).json(pedido)
})

atos.get("/Pedidos", (request,response)=>{
    return response.status(200).json(pedido)
})


module.exports = atos