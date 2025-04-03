CREATE DATABASE condominio;
USE condominio;
CREATE TABLE moradores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    bloco CHAR(2) NOT NULL,       
    apartamento VARCHAR(5) NOT NULL, 
    status ENUM('residente', 'proprietário', 'visitante') NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE veiculos (	
    morador_id INT PRIMARY KEY,
    placa VARCHAR(8) NOT NULL UNIQUE, 
    modelo VARCHAR(50) NOT NULL,
    cor VARCHAR(30) NOT NULL,
    box VARCHAR(10) NOT NULL UNIQUE, 
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
