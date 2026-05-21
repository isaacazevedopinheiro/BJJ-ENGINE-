var formularioModel = require("../models/formularioModel");

function cadastrar(req, res) {
    var fk_usuario = req.body.fkUsuarioServer;
    var resposta = req.body.respostaServer;


    formularioModel.cadastrar(fk_usuario, resposta)
        .then((resultado) => {
            res.status(201).json(resultado);
        })
        .catch((erro) => {
            console.error("Erro ao cadastrar formulario:", erro);
            res.status(500).json({ erro: erro.message || erro });
        });
};

function listarUsuarios(req, res) {
    formularioModel.listarUsuarios()
        .then((resultado) => {
            res.status(201).json(resultado);
        })
        .catch((erro) => {
            console.error("Erro ao listar usuario:", erro);
            res.status(500).json({ erro: erro.message || erro });
        });
};

function listarMaiorPerfil(req, res) {
    formularioModel.listarMaiorPerfil()
        .then((resultado) => {
            res.status(201).json(resultado);
        })
        .catch((erro) => {
            console.error("Erro ao listar maior perfil:", erro);
            res.status(500).json({ erro: erro.message || erro });
        });
};

function enviarDashboard(req, res) {
    formularioModel.enviarDashboard()
        .then((resultado) => {
            res.status(201).json(resultado);
        })
        .catch((erro) => {
            console.error("Erro ao enviar dados na dash", erro);
            res.status(500).json({ erro: erro.message || erro });
        });
};
module.exports = {
    cadastrar,
    listarUsuarios,
    listarMaiorPerfil,
    enviarDashboard
}