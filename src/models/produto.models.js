import pool from "../config/db.js"

const produtoModel = {
    // CREATE - Inserir novo produto
    inserirProduto: async (idCategoria, nomeProduto, valorProduto, vinculoImagem) => {
        const sql = "INSERT INTO produtos (idCategoria, nomeProduto, valorProduto, vinculoImagem, dataCad) VALUES (?, ?, ?, ?, NOW())";
        const values = [idCategoria, nomeProduto, valorProduto, vinculoImagem];
        const [rows] = await pool.execute(sql, values);
        return rows;
    },

    // READ - Buscar todos os produtos
    buscarTodos: async () => {
        const sql = "SELECT * FROM Produtos";
        const [rows] = await pool.execute(sql);
        return rows;
    },

    // READ - Buscar um produto pelo ID
    buscarUm: async (idProduto) => {
        const sql = "SELECT * FROM Produtos WHERE idProduto = ?";
        const [rows] = await pool.execute(sql, [idProduto]);
        return rows;
    },

    // UPDATE - Atualizar algum produto ja existente
    atualizarProduto: async (idProduto, nomeProduto, valorProduto, vinculoImagem) => {
        const sql = "UPDATE produtos SET nomeProduto = ?, valorProduto = ?, vinculoImagem = ?, dataCad = NOW() WHERE idProduto = ?";
        const values = [nomeProduto, valorProduto, vinculoImagem, idProduto];
        const [rows] = await pool.execute(sql, values);
        return rows;
    },

    // DELETE - Deletar o produto
    deletarProduto: async (idProduto) => {
        const sql = "DELETE FROM produtos WHERE idProduto = ?";
        const [rows] = await pool.execute(sql, [idProduto]);
        return rows;
    }
}

export default produtoModel;
