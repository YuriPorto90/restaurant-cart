import express from "express";
import db from "./config/dbConnect.js";
import cardapio from "./models/Cardapio.js"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso!');
});

const app = express();

app.use(express.json());

routes(app);

/*const cardapio = [
    {
      "id": 1,
      "nome": "Marmita Média",
      "valor": 18.99
    },
    {
      "id": 2,
      "nome": "Marmita Grande",
      "valor": 21.99
    },
    {
      "id": 3,
      "nome": "Porção de Cupim (500g)",
      "valor": 79.90
    },
    {
      "id": 4,
      "nome": "Porção de Fritas (500g)",
      "valor": 39.90
    },
    {
      "id": 5,
      "nome": "Porção de Wagyu (300g)",
      "valor": 21.99
    },
    {
      "id": 6,
      "nome": "Barca de sushi",
      "valor": 89.90
    },
    {
      "id": 7,
      "nome": "Burger Cheddar",
      "valor": 24.99
    },
    {
      "id": 8,
      "nome": "Smash Simples",
      "valor": 29.99
    },
    {
      "id": 9,
      "nome": "Smash Triplo",
      "valor": 39.99
    },
    {
      "id": 10,
      "nome": "Smash Máximo",
      "valor": 50.00
    },
    {
        "id": 11,
        "nome": "Marmita Pequena",
        "valor": 15.99
    }
]*/

app.get('/cardapio/:id', (req, res) => {
    let index = buscarItem(req.params.id);
    res.json(cardapio[index]);
});

app.post('/cardapio', (req, res) => {
    cardapio.push(req.body);
    res.status(201).send('Item cadastrado com sucesso!');
});

app.put('/cardapio/:id', (req, res) => {
    let index = buscarItem(req.params.id);

    cardapio[index].nome = req.body.nome;
    cardapio[index].valor = req.body.valor;
    res.json(cardapio);
});

app.delete('/cardapio/:id', (req, res) => {
    let {id} = req.params;
    let index = buscarItem(id);
    cardapio.splice(index, 1);
    res.send(`Item ${id} removido com sucesso!`);
});

function buscarItem(id) {
    return cardapio.findIndex(item => item.id == id);
}

export default app;