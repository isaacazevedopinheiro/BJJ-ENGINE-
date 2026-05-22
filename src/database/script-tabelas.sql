-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE 	database BJJ_ENGINE;
USE BJJ_ENGINE;

CREATE TABLE Nivel_De_Acesso(
    idNivel INT PRIMARY KEY auto_increment,
    Nivel_De_Acesso VARCHAR(45) CHECK (Nivel_De_Acesso IN ('ADMIN', 'NORMAL')) );

CREATE TABLE Usuario(
    idUsuario INT PRIMARY KEY auto_increment,
    Nome VARCHAR (45) NOT NULL,
    Email VARCHAR(45) NOT NULL,
    Senha VARCHAR(45) NOT NULL,
    FkNivelDeAcesso INT,
    CONSTRAINT CtFkNivel_De_Acesso FOREIGN KEY (FkNivelDeAcesso) REFERENCES Nivel_De_Acesso (idNivel));

CREATE TABLE perfil_usuario (
id_perfil INT PRIMARY KEY AUTO_INCREMENT,
fk_usuario INT,
resposta VARCHAR(45),
CONSTRAINT cfk_usuario FOREIGN KEY (fk_usuario) REFERENCES Usuario(idUsuario)
);

INSERT INTO Nivel_De_Acesso (Nivel_De_Acesso) VALUES
('ADMIN'), 
('NORMAL');
INSERT INTO Usuario (Nome, Email, Senha) VALUES
('perfilestratégico','1@gmail', '1@gmail'),
('perfilpressão','2@gmail', '2@gmail'),
('perfilflexivel','3@gmail', '3@gmail'),
('perfilfinalizador','4@gmail', '4@gmail');

INSERT INTO perfil_usuario (fk_usuario , resposta) VALUES
(1, 'Pressão'),
(2, 'Estratégico'),
(3, 'Flexivel'),
(4, 'Finalizador');


-- show columns from Usuario;
-- show columns from perfil_usuario;

SELECT * FROM Usuario;

SELECT pu.fk_usuario , pu.resposta, u.Nome, u.Email, u.Senha 
FROM perfil_usuario pu 
JOIN Usuario u 
ON u.idUsuario = pu.fk_usuario;

