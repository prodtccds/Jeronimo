const express = require("express");
const path = require("path")
const app = express();

app.get("/", (req, res) => {
        res.sendFile(__dirname + "/client/index.html");
});

app.get("/introducao", (req, res) => {
        res.sendFile(__dirname + "/client/pages/introducao.html");
});

app.get("/web", (req, res) => {
        res.sendFile(__dirname + "/client/pages/web.html");
});

app.get("/sobre", (req, res) => {
        res.sendFile(__dirname + "/client/pages/sobre.html");
});


/*
app.use() => uma  funcao de MIDLEWARE tem acesso ao objeto de solicitacao req
e o Objeto e reposta req, res;
podemos enviar oum diretorio com app.use, usano o express.statoc e usando o path joins

*/
app.use(express.static(path.join(__dirname , '/client')));


const PORT = 80;
app.listen(PORT, ()=> {
        console.log("servidor rodando heheh!");
});