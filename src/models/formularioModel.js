var database = require("../database/config")

function cadastrar(fk_usuario, resposta) {
    console.log("ACESSEI O FORMULARIO MODEL:", fk_usuario, resposta);
    
    var instrucaoSql = `
        INSERT INTO perfil_usuario ( fk_usuario, resposta) 
        VALUES ('${fk_usuario}', '${resposta}';
    `;

    console.log("Executando SQL:", instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    cadastrar
}