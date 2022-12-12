import livros from "../models/Livros.js";

class LivroController {
    
    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros)
        })
    }

    static cadastrarLivros = (req, res) => {
        let livro = new livros (req.body);

        livro.save((err) => {
            if(err) {
                res.status(500).send({message:`${err.message} - não foi possível cadastrar o livro.`})
            } else {
                res.status(200).send(livro.toJSON())
            }
        })
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err) {
                res.status(500).send({message: err.message})
            } else {
                res.status(200).send({message: 'Livro atualizado'})
            }
        })
    }
}

export default LivroController