module.exports = {
  unidades: [],
  getAll() {
    return this.unidades;
  },
  post(nome) {
    this.unidades.push({ id: generateID(), nome });
  },
  delete(identificador) {
    var unidadesAtualizadas = this.unidades.filter(
      (item) => item.id !== identificador
    );
    this.unidades = unidadesAtualizadas;
  },
  update(id, novoNome) {
    var unidadesAtualizadas = this.unidades.map((item) => {
      if (item.id === id) {
        item.nome = novoNome;
      }
      return item;
    });
    this.unidades = unidadesAtualizadas;
  },
};

function generateID() {
  return Math.random().toString(36).substring(2, 9);
}
