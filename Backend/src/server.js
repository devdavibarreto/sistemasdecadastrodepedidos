const express = require("express");

const app = express();

app.use(express.json());

app.get('/teste',(req,res)=>{

    return res.json("Deus é Fiel")
});

app.listen(3523,()=>{
    console.log(`Server run in local:host localhost:3523`)
})