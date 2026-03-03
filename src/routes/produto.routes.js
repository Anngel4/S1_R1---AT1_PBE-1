import produtoController from "../controllers/produto.controller.js";
import { Router } from "express";

// const express  = require("express")
// const router = express.Router(); //a rota so é acessada se a middleway permitir
// const {} = require("../controllers/produtoController");
//const produtoController = require("../controllers/produtoController");

const produtoRoutes = Router();

//GET - listar as categorias
router.get("/produtos", produtoController.listarProdutos);

//POST - criar uma categoria
router.post("/produtos", produtoController.cadastrarProduto);

//PUT - atualizar uma categoria já existente
router.put("/produtos/:idProduto", produtoController.atualizarProduto);

//DELETE - deletar produto
router.delete("/produtos/:idProduto", produtoController.deletarProduto);

export default produtoRoutes