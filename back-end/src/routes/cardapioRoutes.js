import express from "express";
import CardapioController from "../controllers/cardapioController.js";

const router = express.Router();

router
    .get("/cardapio", CardapioController.obterCardapio)
    .post("/cardapio", CardapioController.cadastrarItem);

export default router;