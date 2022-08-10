const db = require("../../../../server/database");

const Carta = require("../model/Carta");
const SingletonServicos = require("../services/singleton/SingletonServicos");

class ColecaoController {
  static ColecaoServico = SingletonServicos.getColecaoServico();

  static listarCartasColecao(req, res) {
    const idColecao = req.params.id;
    ColecaoServico.listarCartasColecao(idColecao).then((result) => {
      res.send(result);
    });
  }
  static listColecao(req, res) {
    const sqlSelectAll = "SELECT * FROM colecao";
    db.query(sqlSelectAll, (err, result) => {
      res.send(result);
    });
  }
  static adicionarCarta(req, res) {
    const idColecao = req.params.id;
    const nomeCarta = req.body.nome;
    const raridadeCarta = req.body.raridade;
    const precoCarta = req.body.preco;
    const qtdCarta = req.body.qtdCarta;

    const carta = new Carta(nomeCarta, raridadeCarta, precoCarta);

    ColecaoServico.adicionarCarta(carta, idColecao, qtdCarta).then((result) => {
      res.send(result);
    });
  }
  static removerCarta(req, res) {
    const idColecao = req.params.id;
    const idCarta = req.params.idC;
    ColecaoServico.removerCarta(idColecao, idCarta);
  }
}

module.exports = ColecaoController;
