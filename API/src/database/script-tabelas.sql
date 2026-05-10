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
    NickName VARCHAR(45) UNIQUE,
    Email VARCHAR(45) NOT NULL,
    Senha VARCHAR(45) NOT NULL,
    FkNivelDeAcesso INT,
    CONSTRAINT CtFkNivel_De_Acesso FOREIGN KEY (FkNivelDeAcesso) REFERENCES Nivel_De_Acesso (idNivel));

INSERT INTO Nivel_De_Acesso (Nivel_De_Acesso) VALUES 
('ADMIN'), 
('NORMAL');
INSERT INTO Usuario (Nome, Nickname, Email, Senha, FkNivelDeAcesso) VALUES
('Isaac', 'IsaacAdmin', 'isaac@bjj.com', 'senha123', 1),
('Noob', 'NoobMaster', 'noob@bjj.com', '123456', 2);

SELECT u.NOME,
u.Nickname,
u.Email, 
u.Senha,
n.Nivel_de_Acesso AS 'Cargo'
FROM Usuario u
JOIN Nivel_De_Acesso n
on u.FkNivelDeAcesso = n.idNivel;

select * from usuario; 
	delete from usuario where idUsuario = 21;

alter table usuario drop column NickName;


show columns from usuario;






/* CREATE DATABASE aquatech;

USE aquatech;

CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	razao_social VARCHAR(50),
	cnpj CHAR(14),
	codigo_ativacao VARCHAR(50)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

create table aquario (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(300),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_aquario INT,
	FOREIGN KEY (fk_aquario) REFERENCES aquario(id)
);

insert into empresa (razao_social, codigo_ativacao) values ('Empresa 1', 'ED145B');
insert into empresa (razao_social, codigo_ativacao) values ('Empresa 2', 'A1B2C3');
insert into aquario (descricao, fk_empresa) values ('Aquário de Estrela-do-mar', 1);
insert into aquario (descricao, fk_empresa) values ('Aquário de Peixe-dourado', 2); */

