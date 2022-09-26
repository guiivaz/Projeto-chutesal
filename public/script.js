// const { options } = require("../routes/api");

document.addEventListener("DOMContentLoaded", () => {
  atualizarUnidades();
});

function atualizarUnidades() {
  fetch("http://localhost:3000/api/get")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      let elementosUnidade = "";

      let unidades = JSON.parse(json);

      unidades.forEach((item) => {
        let elementoUnidade = `<tr id="${item.id}">
          <td>${item.id}</td>
          <td>${item.nome}</td>
          <td onclick="deletar(this)">X</td>
        </tr>`;
        elementosUnidade += elementoUnidade;
      });

      document.getElementById("tabela-unidades").innerHTML = elementosUnidade;
    });
}

function novaUnidade() {
  let nome = document.getElementById("nome").value;
  let unidade = { nome };

  const options = {
    method: "POST",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify(unidade),
  };

  fetch("http://localhost:3000/api/post", options).then((res) => {
    atualizarUnidades();
  });
}

function atualizaUnidade() {
  let id = document.getElementById("id").value;
  let novoNome = document.getElementById("novo-nome").value;
  let unidade = { id, nome: novoNome };

  const options = {
    method: "PUT",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify(unidade),
  };
  fetch("http://localhost:3000/api/update", options).then((res) => {
    console.log(JSON.stringify(unidade));
    atualizarUnidades();
  });
}

function deletar(e) {
  let tr = e.parentNode;
  let id = tr.id;

  let unidade = { id };

  const options = {
    method: "DELETE",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify(unidade),
  };
  fetch("http://localhost:3000/api/delete", options).then((res) => {
    atualizarUnidades();
  });
}
