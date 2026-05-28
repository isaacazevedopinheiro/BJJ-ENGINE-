var database = require("../database/config")

function cadastrar(fk_usuario, resposta) {
    console.log("ACESSEI O FORMULARIO MODEL:", fk_usuario, resposta);
    
    var instrucaoSql = `
        INSERT INTO perfil_usuario (fk_usuario, resposta)
        VALUES ('${fk_usuario}', '${resposta}');
    `;

    console.log("Executando SQL:", instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarUsuarios(){

    console.log("ACESSEI O FORMULARIO MODEL:")

        var instrucaoSql = `
        SELECT COUNT(resposta) as totalUsuario FROM perfil_usuario;
    `;

     console.log("Executando SQL:", instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarMaiorPerfil(){

    console.log("ACESSEI O FORMULARIO MODEL:")

        var instrucaoSql = `
       SELECT COUNT(resposta) as TotalUsuarios, resposta FROM perfil_usuario GROUP BY resposta ORDER BY COUNT(resposta) DESC LIMIT 1;
    `;

     console.log("Executando SQL:", instrucaoSql);
    return database.executar(instrucaoSql);
}
//4
function enviarDashboard(){

    console.log("ACESSEI O FORMULARIO MODEL:")

        var instrucaoSql = `
       SELECT COUNT(resposta) AS quantidade_de_resposta, resposta FROM perfil_usuario GROUP BY resposta;
    `;

     console.log("Executando SQL:", instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    listarUsuarios,
    listarMaiorPerfil,
    enviarDashboard
}