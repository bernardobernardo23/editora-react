const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());


const db = mysql.createConnection({
    host: "localhost",
    user: "root",      
    password: "",       
    database: "editora_db"
});

db.connect(err => {
    if (err) throw err;
    console.log("Conectado ao MySQL!");
});

// Rotas
app.get("/editora/", (req, res) => {
    db.query("SELECT * FROM artigos", (err, results) => {
        if (err) res.status(500).send(err);
        else res.json(results);
    });
});

app.get("/editora/:id", (req, res) => {
    const { id } = req.params;
    db.query("SELECT * FROM artigos WHERE id = ?", [id], (err, results) => {
        if (err) res.status(500).send(err);
        else res.json(results[0]);
    });
});

app.post("/editora/", (req, res) => {
    const { titulo, resumo } = req.body;
    db.query(
        "INSERT INTO artigos (titulo, resumo) VALUES (?, ?)",
        [titulo, resumo],
        (err, result) => {
            if (err) res.status(500).send(err);
            else res.json({ id: result.insertId, titulo, resumo, publicado: false });
        }
    );
});

app.put("/editora/:id", (req, res) => {
    const { id } = req.params;
    const { titulo, resumo, publicado } = req.body;
    db.query(
        "UPDATE artigos SET titulo = ?, resumo = ?, publicado = ? WHERE id = ?",
        [titulo, resumo, publicado, id],
        (err) => {
            if (err) res.status(500).send(err);
            else res.json({ id, titulo, resumo, publicado });
        }
    );
});

app.delete("/editora/:id", (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM artigos WHERE id = ?", [id], (err) => {
        if (err) res.status(500).send(err);
        else res.json({ message: "Artigo excluído" });
    });
});

app.listen(8000, () => {
    console.log("Servidor rodando em http://localhost:8000");
});
