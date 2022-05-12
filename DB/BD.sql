DROP TABLE IF EXISTS PERSONAS;
DROP TABLE IF EXISTS BANCOS;
DROP TABLE IF EXISTS CUENTAS;
DROP TABLE IF EXISTS MOVIMIENTOS;
DROP TABLE IF EXISTS ACTIVOS;
DROP TABLE IF EXISTS TIPOS_ACTIVOS;


CREATE TABLE PERSONAS (
ID_PERSONA INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
CARNET VARCHAR(10) NOT NULL UNIQUE,
NOMBRES VARCHAR(30) NOT NULL,
PATERNO VARCHAR(30) NOT NULL,
MATERNO VARCHAR(30) NOT NULL,
FECHA DATE NOT NULL,
AUD_ESTADO TINYINT NOT NULL,
AUD_FECHA DATETIME NOT NULL,
AUD_USUARIO INT NOT NULL);

CREATE TABLE BANCOS (
ID_BANCO INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
NOMBRE VARCHAR(30) NOT NULL UNIQUE,
AUD_ESTADO TINYINT NOT NULL,
AUD_FECHA DATETIME NOT NULL,
AUD_USUARIO INT NOT NULL);

CREATE TABLE CUENTAS (
ID_CUENTA INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
NRO_CUENTA VARCHAR(30) NOT NULL DEFAULT '0',
BANCO_ID INT NOT NULL,
PERSONA_ID INT NOT NULL,
SALDO DECIMAL(7,2) NOT NULL,
AUD_ESTADO TINYINT NOT NULL,
AUD_FECHA DATETIME NOT NULL,
AUD_USUARIO INT NOT NULL);

CREATE TABLE MOVIMIENTOS (
ID_MOVIMIENTO INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
CUENTA_ID INT NOT NULL,
MONTO DECIMAL(7,2) NOT NULL DEFAULT 0,
DESCRIPCION VARCHAR(50) NOT NULL,
AUD_ESTADO TINYINT NOT NULL,
AUD_FECHA DATETIME NOT NULL,
AUD_USUARIO INT NOT NULL);

CREATE TABLE ACTIVOS (
ID_ACTIVO INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
TIPO_ID INT NOT NULL,
NOMBRE VARCHAR(30) NOT NULL,
DETALLE VARCHAR NOT NULL,
COSTO DECIMAL(7,2) NOT NULL,
FECHA DATE NOT NULL,
ESTADO CHAR NOT NULL,
AUD_ESTADO TINYINT NOT NULL,
AUD_FECHA DATETIME NOT NULL,
AUD_USUARIO INT NOT NULL);

CREATE TABLE TIPOS_ACTIVOS (
ID_TIPO INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
NOMBRE VARCHAR(30) NOT NULL UNIQUE,
AUD_ESTADO TINYINT NOT NULL,
AUD_FECHA DATETIME NOT NULL,
AUD_USUARIO INT NOT NULL);

ALTER TABLE CUENTAS ADD CONSTRAINT CUENTAS_BANCO_ID_BANCOS_ID_BANCO FOREIGN KEY (BANCO_ID) REFERENCES BANCOS(ID_BANCO) ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE CUENTAS ADD CONSTRAINT CUENTAS_PERSONA_ID_PERSONAS_ID_PERSONA FOREIGN KEY (PERSONA_ID) REFERENCES PERSONAS(ID_PERSONA) ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE MOVIMIENTOS ADD CONSTRAINT MOVIMIENTOS _CUENTA_ID_CUENTAS_ID_CUENTA FOREIGN KEY (CUENTA_ID) REFERENCES CUENTAS(ID_CUENTA) ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE ACTIVOS ADD CONSTRAINT ACTIVOS_TIPO_ID_TIPOS_ACTIVOS_ID_TIPO FOREIGN KEY (TIPO_ID) REFERENCES TIPOS_ACTIVOS(ID_TIPO) ON DELETE NO ACTION ON UPDATE NO ACTION;