const express = require("express");
const {PrismaClient} = require("@prisma/client")

const prisma = new  PrismaClient()

const allpedido = [{pedidos: "", descricao: "", ordem: Number}]
let ordem = 0

const atos = express.Router();

atos.post("/CadastroDePedidos", async (request,response) => {

 const {pedidos,descricao} = request.body;

ordem++


 const atosBurguer = await prisma.atosBurguer.create({
    data:{
        pedidos,
        descricao,
        ordem,
    }
 })
return response.status(201).json(atosBurguer)
})

atos.get("/Pedidos", async (request,response)=>{
    const pedidosemaberto = await prisma.atosBurguer.findMany()
    return response.status(200).json(pedidosemaberto)
})


module.exports = atos