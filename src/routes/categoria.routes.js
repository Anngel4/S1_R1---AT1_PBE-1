import categoriaController from "../controllers/categoria.controller.js";
import { Router } from "express";

const categoriaRoutes = Router();

categoriaRoutes.get('/produtos/categorias', categoriaController.listarCategorias);
// categoriaRoutes.post('/produtos/categorias', categoriaController.cadastrarCategoria);
// categoriaRoutes.get('/produtos/categorias/:id', categoriaController.buscarCategoria);
// categoriaRoutes.put('/produtos/categorias/:id', categoriaController.editarCategoria);
// categoriaRoutes.delete('/produtos/categorias/:id', categoriaController.excluirCategoria);

export default categoriaRoutes;
