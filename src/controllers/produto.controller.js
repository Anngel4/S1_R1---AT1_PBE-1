import produtoModel from "../models/produto.models.js";

const produtoController = {
    // READ - Listar todos ou buscar um por ID
    listarProdutos: async (req, res) => {
        try {
            const { idProduto } = req.query;

            if (idProduto) {
                // Valida se é um número válido (ID é INT, não UUID)
                const idNum = parseInt(idProduto);
                if (isNaN(idNum) || idNum <= 0) {
                    return res.status(400).json({ erro: 'ID do produto inválido' })
                }

                const produto = await produtoModel.buscarUm(idNum);

                if (!produto || produto.length === 0) {
                    return res.status(404).json({ erro: 'Produto não encontrado' })
                }

                return res.status(200).json(produto[0]);
            }

            const produtos = await produtoModel.buscarTodos();
            res.status(200).json(produtos);
        } catch (error) {
            console.error("Erro ao listar produto", error);
            res.status(500).json({ message: 'Erro ao buscar produtos' });
        }
    },

    // CREATE - Criar novo produto
    criarProduto: async (req, res) => {
        try {
            const { idCategoria, nomeProduto, valorProduto, vinculoImagem } = req.body;

            // Validação dos campos obrigatórios
            if (idCategoria == undefined || nomeProduto == undefined || valorProduto == undefined || vinculoImagem == undefined) {
                return res.status(400).json({ erro: 'Campos obrigatórios não preenchidos!!' })
            }

            if (isNaN(valorProduto)) {
                return res.status(400).json({ erro: 'Valor do produto deve ser um número válido!' })
            }

            await produtoModel.inserirProduto(idCategoria, nomeProduto, valorProduto, vinculoImagem);

            res.status(201).json({ message: 'Produto cadastrado com sucesso!' });
        } catch (error) {
            console.error("Erro ao criar produto: ", error)
            res.status(500).json({ erro: 'Erro no servidor ao cadastrar produto!' })
        }
    },

    // UPDATE - Atualizar produto
    atualizarProduto: async (req, res) => {
        try {
            const { idProduto } = req.params;
            const { nomeProduto, valorProduto, vinculoImagem } = req.body;

            // Valida se é um número válido (ID é INT, não UUID)
            const idNum = parseInt(idProduto);
            if (isNaN(idNum) || idNum <= 0) {
                return res.status(400).json({ erro: 'ID do produto inválido!' })
            }

            const produto = await produtoModel.buscarUm(idNum);

            if (!produto || produto.length !== 1) {
                return res.status(404).json({ error: 'Produto não encontrado!' })
            }

            const produtoAtual = produto[0];

            // Usa valores novos ou mantém os antigos
            const nomeProdutoAtualizado = nomeProduto ?? produtoAtual.nomeProduto;
            const valorProdutoAtualizado = valorProduto ?? produtoAtual.valorProduto;
            const vinculoImagemAtualizado = vinculoImagem ?? produtoAtual.vinculoImagem;

            await produtoModel.atualizarProduto(idNum, nomeProdutoAtualizado, valorProdutoAtualizado, vinculoImagemAtualizado);

            return res.status(200).json({ message: 'Produto atualizado com sucesso' })
        } catch (error) {
            console.error("Erro ao atualizar produto: ", error)
            res.status(500).json({ erro: 'Erro no servidor ao atualizar o produto!' })
        }
    },

    // DELETE - Deletar produto
    deletarProduto: async (req, res) => {
        try {
            const { idProduto } = req.params;

            // Valida se é um número válido (ID é INT, não UUID)
            const idNum = parseInt(idProduto);
            if (isNaN(idNum) || idNum <= 0) {
                return res.status(400).json({ erro: 'ID do produto inválido!' })
            }

            const produto = await produtoModel.buscarUm(idNum);

            if (!produto || produto.length !== 1) {
                return res.status(404).json({ error: 'Produto não encontrado!' })
            }

            await produtoModel.deletarProduto(idNum);
            return res.status(200).json({ message: "Produto deletado com sucesso!" })
        } catch (error) {
            console.error("Erro ao deletar produto: ", error)
            res.status(500).json({ erro: 'Erro no servidor ao deletar o produto!' })
        }
    }
}

export default produtoController;
