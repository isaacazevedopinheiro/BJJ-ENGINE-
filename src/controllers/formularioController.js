var formularioModel = require("../models/formularioModel");

function cadastrar(req, res) {
    var fk_usuario = req.body.fk_usuarioServer;
    var resposta = req.body.estiloServer;


      formularioModel.cadastrar().then((fk_usuario, resposta) => {
        res.status(201).json(resultado);
      });
  };

  module.exports = {
    cadastrar
}