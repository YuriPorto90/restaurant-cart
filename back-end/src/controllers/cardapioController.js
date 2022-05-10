import cardapio from "../models/Cardapio.js";

class CardapioController {

    static obterCardapio = (req, res) => {
        cardapio.find((err, cardapio) => {
            res.status(200).json(cardapio);
        });
    };

    static cadastrarItem = (req, res) => {
        let item = new cardapio(req.body);

        item.save((err) => {

            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar item no cardápio.` });
            } else {
                res.status(201).send(item.toJSON());
            }
        });
    };
}

export default CardapioController