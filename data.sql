USE helpdesk;

INSERT INTO companies VALUES(1, 'Lab', 'Napoleón 180, Vallarta Norte', '44690', 'Guadalajara', 'Jalisco', 'México', '(553)-244-8950', 'karo@gmail.com', 'www.lab.com.mx', now(), now());
INSERT INTO companies VALUES(2, 'Morel', 'Quinta Mayor 93, La Villa', '66509', 'Hermosillo', 'Sonora', 'México', '(553)-244-8950', 'morel@gmail.com', 'www.morel.mx', now(), now());
INSERT INTO companies VALUES(3, 'HelpDesk', 'Bahia Azul 42, Arboleadas', '55410', 'Salamanca', 'Guanajuato', 'México', '(464)-125-7845', 'hola@helpdesk.com', 'www.helpdesk.mx', now(), now());
INSERT INTO companies VALUES(4, 'Games++', 'Plaza Santa María, Villa', '12405', 'Valle Mat-Su', 'Alaska', 'Estados Unidos', '(464)-125-7845', 'inf@gamesplusplus.us', 'www.gamesplusplus.us', now(), now());

INSERT INTO departments VALUES(1, 'IT', 1, now(), now());
INSERT INTO departments VALUES(2, 'Redes', 2, now(), now());
INSERT INTO departments VALUES(3, 'Hardware', 2, now(), now());
INSERT INTO departments VALUES(4, 'Software', 1, now(), now());
INSERT INTO departments VALUES(5, 'Compras', 3, now(), now());
INSERT INTO departments VALUES(6, 'RH', 3, now(), now());
INSERT INTO departments VALUES(7, 'Ingeniería', 4, now(), now());
INSERT INTO departments VALUES(8, 'Comunicaciones', 5, now(), now());
INSERT INTO departments VALUES(9, 'Contabilidad', 6, now(), now());
INSERT INTO departments VALUES(10, 'Administración', 6, now(), now());
INSERT INTO departments VALUES(11, 'Marketing', 7, now(), now());

INSERT INTO users VALUES(1, 'Idalid', 'Avila', 'id@helpdesk.com', '(462)-103-8018', 'idavila', 'HoliCrayoli01', 1, now(), now(), 3, 1);
INSERT INTO users VALUES(2, 'Karolina', 'Zepeda', 'kazco96@gmail.com', '(553)-244-8950', 'kzepeda', '260596', 0, now(), now(), 1, 11);
INSERT INTO users VALUES(3, 'Cynthia', 'Cota', 'cynthia@gmail.com', '(662)-133-6873', 'ccota', '260596', 0, now(), now(), 2, 11);
INSERT INTO users VALUES(4, 'Ricardo', 'Barroso', 'ricardo@gmail.com', '(462)-178-0232', 'barroso', 'barroso02', 0, now(), now(), 4, 5);

INSERT INTO categories VALUES(1, 'Hardware', now(), now());

INSERT INTO tickets VALUES(1, 'Error', 'We have an error with my mouse and printer. When both are conected, the keyboard isn\'t function correctly', 1, now(), now(), 1, 10, 4);

INSERT INTO monitors VALUES(1, 'We acepted ticket', now(), now(), 1);

INSERT INTO advice VALUES(1, 1, 'Hello <3', now(), now(), 4);