import express from "express";
import livros from "./livrosRoutes.js";

const routes = (app) => {
    app.routes('/').get((req,res) =>{
        res.status(200).send({titulo: "livros para leitura"})
    })

    app.use(
        express.json(),
        livros
    )
}

export default routes