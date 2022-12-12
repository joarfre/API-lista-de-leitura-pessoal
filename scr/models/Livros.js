import mongoose from "mongoose";

const livroSchema = mongoose.Schema (
    {
        id: {type: String},
        titulo: {type: String, required: true},
        autor: {type: String, required: false},
        numeroPaginas: {type: Number, required: false},
        situacao: {type: String, require: true}
    },
    {
        versionKey: false
    }
);

const livros = mongoose.model('livros', livroSchema);

export default livros;