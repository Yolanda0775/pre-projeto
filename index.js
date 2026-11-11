require('dotenv').config();

const express = require('express');

const app = express();
const PORTA = process.env.PORTA || 3000;

app.use(espress.json());

app.get('/', (req, res)=> {
    res.json({ mensagem: 'API da loja funcionando!'});
});

app.listen(PORTA, ()=>{
    console.log(`Servido rodando em http://localhost:${PORTA}`);
});
