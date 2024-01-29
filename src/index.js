const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Meu Primeiro Servidor Express');
});

app.get('/usuarios', (req, res) => {
    const usuarios = [
        { id: 11, nome: 'joao', idade: 23 },
        { id: 2, nome: 'maria', idade: 33 },
        { id: 4, nome: 'ana', idade: 19 }
    ]
    res.send(usuarios);
});

app.listen(3000, () => {
    console.log('Servidor Iniciado na Porta 3000');
})