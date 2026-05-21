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
INSERT INTO Usuario (Nome, Email, Senha, FkNivelDeAcesso) VALUES
('Isaac','isaac@bjj.com', 'senha123', 1),
('Noob','noob@bjj.com', '123456', 2);

SELECT u.NOME,
u.Nickname,
u.Email, 
u.Senha,
n.Nivel_de_Acesso AS 'Cargo'
FROM Usuario u
JOIN Nivel_De_Acesso n
on u.FkNivelDeAcesso = n.idNivel;U
select * from Usuario; 
	delete from Usuario where idUsuario = 21;

alter table Usuario drop column NickName;

show columns from Usuario;