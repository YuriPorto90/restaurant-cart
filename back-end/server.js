//Iniciando a API que será feita em NodeJS
import app from "./src/app.js";

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
});