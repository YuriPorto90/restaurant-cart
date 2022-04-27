//Iniciando a API que será feita em NodeJS

const http = require("http");
const port = 3000;

const rotas = {

    '/': 'Curso de Node',
    '/garcons': 'Lista de Garçons',
    '/cardapio': 'Cardápio',
    '/pedidos': 'Lista de Pedidos'
}

const server = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);
});

server.listen(port, () => {
    
    console.log(`Servidor escutando em http://localhost:${port}`);
});