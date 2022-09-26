var express = require("express");
var router = express.Router();
const unidades = require("../model/unidades");

router.get("/get", (req, res) => {
  res.json(JSON.stringify(unidades.getAll()));
});

router.post("/post", express.json(), (req, res) => {
  let nome = req.body.nome;

  unidades.post(nome);
  res.send("Unidade adicionada");
});

router.delete("/delete", express.json(), (req, res) => {
  let id = req.body.id;
  unidades.delete(id);
  res.send("Unidade removida com sucesso!");
});

router.put("/update", express.json(), (req, res) => {
  let id = req.body.id;
  let novoNome = req.body.nome;

  unidades.update(id, novoNome);
  res.send("Nome atualizado com sucesso!");
});

module.exports = router;
