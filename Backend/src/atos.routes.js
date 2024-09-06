const express = require("express");

const {PrismaClient} = require("@prisma/client")

const prisma = new  PrismaClient()

const allpedido = [{pedidos: "", descricao: "", ordem: Number}]
let ordem = 0

const atos = express.Router();

atos.post("/atos", async (request,response) => {

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

atos.get("/atos", async (request,response)=>{
    const pedidosemaberto = await prisma.atosBurguer.findMany()
    return response.status(200).json(pedidosemaberto);
})

atos.put("/atos", async(request,response)=>{
    const { id,pedidos,descricao, } = request.body

    if(!id ){
        return response.status(400).json("ID É OBRIGATORIO")
    }

    const idInBd = await prisma.atosBurguer.findUnique({where: {id}})

    if( !idInBd){
        return response.status(404).json("Esse id não existe")
    }

    const atosBurguer = await prisma.atosBurguer.update({
        where:{
            id,
        },
        data:{
            pedidos,
            descricao,
            
        },
    });
    return response.status(200).json(atosBurguer)


})

atos.delete("/atos/:id", async( request,response)=>{
const {id} = request.params;


const intId = parseInt(id)


if(!intId ){
    return response.status(400).json("ID É OBRIGATORIO")
}

    const idInBd = await prisma.atosBurguer.findUnique({where: {id: intId}})

if( !idInBd){
    return response.status(404).json("Esse id não existe")
}

await prisma.atosBurguer.delete({where:{id: intId}})

return response.status(200).send()
});

module.exports = atos