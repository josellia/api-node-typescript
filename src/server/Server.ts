import express from "express";

//Criando a instância do servidor
const server = express();

server.get('/', (req, res) => {
    return res.send('Hello word');
});

export { server };