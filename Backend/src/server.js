const express = require("express");
const  atos  = require("./atos.routes")
const app = express();
const cors = require ("cors")

app.use(express.json());
app.use(cors());
app.use(atos);

app.get('/teste',(req,res)=>{

    return res.json("Deus é Fiel ✝")
});

app.listen(3523,()=>{
    console.log(`Server run in local:host localhost:3523`)
})