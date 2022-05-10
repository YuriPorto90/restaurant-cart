import express from "express";
import cardapio from "./cardapioRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Curso de Node"});
    });

    app.use(
        express.json(),
        cardapio
    );
}

export default routes;