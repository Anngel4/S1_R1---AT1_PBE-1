import pool from "../config/db.js";

const categoriaModel = {
    // CRIAR - Inserir nova categoria
    inserir: async (pCategoria) => {
        const sql = 'INSERT INTO Categoria (descricaoCategoria, dataCad) VALUES (?, ?)';
        const values = [pCategoria.descricaoCategoria, pCategoria.dataCad];
        const [result] = await pool.execute(sql, values);
    },

    // BUSCAR TODOS - Buscar todas as categorias
    buscarTodas: async () => {
        const sql = "SELECT * FROM categoria";
        const [rows] = await pool.execute(sql);
        return rows;
    },


    // BUSCAR UM - Buscar categoria pelo ID
    buscarUm: async (idCategoria) => {
        const sql = "SELECT * FROM categoria WHERE idCategoria = ?";
        const [rows] = await pool.execute(sql, [idCategoria]);
        return rows[0];
    },

    // UPDATE - Atualizar categoria
    atualizar: async ({ idCategoria, descricaoCategoria }) => {
        const sql = "UPDATE categoria SET descricaoCategoria = ?, dataCad = NOW() WHERE idCategoria = ?";
        const [rows] = await pool.execute(sql, [descricaoCategoria, idCategoria]);
        return rows;
    },

    // DELETE - Deletar categoria
    deletar: async (idCategoria) => {
        const sql = "DELETE FROM categoria WHERE idCategoria = ?";
        const [rows] = await pool.execute(sql, [idCategoria]);
        return rows;
    }
}

export default categoriaModel;
