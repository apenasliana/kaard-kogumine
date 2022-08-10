const UsuarioServico = require("../UsuarioServico");
const BaralhoServico = require("../BaralhoServico");
const CartaServico = require("../CartaServico");
const ColecaoServico = require("../ColecaoServico");

class SingletonServicos {
  usuarioServico = new UsuarioServico();
  cartaServico = new CartaServico();
  baralhoServico = new BaralhoServico();
  colecaoServico = new ColecaoServico();

  static getUsuarioServico() {
    return this.usuarioServico;
  }
  static getCartaServico() {
    return this.cartaServico;
  }
  static getBaralhoServico() {
    return this.baralhoServico;
  }
  static getColecaoServico() {
    return this.colecaoServico;
  }
}

module.exports = SingletonServicos;
