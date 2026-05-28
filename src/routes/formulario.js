// protocolo guarda de transito
var express = require("express");
var router = express.Router();

var formularioController = require("../controllers/formularioController");

router.post("/cadastrar", function (req, res) {
    formularioController.cadastrar(req, res);
});

router.get("/listarTotalUsuarios", function(req, res) {
    formularioController.listarUsuarios(req, res)
})

router.get("/listarTotalUsuariosPerfil" ,function (req, res){
    formularioController.listarMaiorPerfil(req, res)
})

//2
//ja tem o app.js configurado
router.get("/Dashboard1", function(req, res) {
    formularioController.enviarDashboard(req, res)
})

module.exports = router;



