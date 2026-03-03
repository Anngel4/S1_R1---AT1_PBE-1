import express from "express";
import imagemRoutes from "./routes/imagem.routes.js";
//import produtoRoutes from "./routes/produto.routes.js";
//import categoriaRoutes from "./routes/categoria.routes.js";
import path from 'path';
import 'dotenv/config';

const app = express();

app.use(express.json());

app.use('/', imagemRoutes);
//app.use('/produtos', produtoRoutes);
//app.use('/categorias', categoriaRoutes);

app.listen(process.env.SERVER_PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${process.env.SERVER_PORT}`);
})