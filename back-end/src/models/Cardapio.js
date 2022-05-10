import mongoose from "mongoose";

const cardapioSchema = new mongoose.Schema(
    {
        id: { type: String },
        titulo: { type: String, required: true },
        valor: { type: String, required: true },
        imagem: { type: String }
    }
);

const cardapio = mongoose.model('cardapio', cardapioSchema);

export default cardapio;