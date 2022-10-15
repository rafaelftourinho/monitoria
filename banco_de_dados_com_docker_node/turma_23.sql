CREATE DATABASE  IF NOT EXISTS `turma_23`;
USE `turma_23`;


DROP TABLE IF EXISTS `alunos`;

CREATE TABLE `alunos` (
  `id_turma` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(20) NOT NULL,
  `sobrenome` varchar(20) NOT NULL,
  `idade` int NOT NULL,
  PRIMARY KEY (`id_turma`),
  UNIQUE KEY `id_turma` (`id_turma`)
) 

