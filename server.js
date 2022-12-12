import app from "./scr/app.js";

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor escutando na https://localhost${port}`)
})