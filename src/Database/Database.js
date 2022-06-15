import SQlite from "react-native-sqlite-storage";
SQlite.DEBUG(true);
SQlite.enablePromise(true);

const database_name = "Imobiliaria.db";
const database_version = "1.0";
const database_displayname = "Imobiliaria Proj";
const database_size = 200000;

export default class Database {
    Conectar() {
        let db;
        return new Promise((resolve) => {
            console.log("Checando a integridade do plugin ...");

            SQlite.echoTest().then(() => {
                console.log("Integridade Ok ...");
                console.log("Abrindo Banco de Dados ...");
                SQlite.openDatabase(database_name, database_version, database_displayname, database_size).then(DB => {
                    db = DB;
                    console.log("Banco de dados Aberto");
                    db.executeSql('SELECT 1 FROM Imobiliaria LIMIT 1').then(() => {
                        console.log("O banco de dados está pronto ... Executando Consulta SQL ...");
                    }).catch((error) => {
                        console.log("Erro Recebido: ", error);
                        console.log("O Banco de dados não está pronto ... Criando Dados");
                        db.transaction((tx) => {
                            tx.executeSql('CREATE TABLE IF NOT EXISTS Imobiliaria (id INTEGER PRIMARY KEY AUTOINCREMENT, endereco VARCHAR(100), finalidade VARCHAR(30), tipo VARCHAR(30), valor DOUBLE, foto text)');
                        }).then(() => {
                            console.log("Tabela criada com Sucesso");
                        }).catch(error => {
                            console.log(error);
                        });
                    });
                    resolve(db);
                }).catch(error => {
                    console.log(error);
                });
            }).catch(error => {
                console.log("echoTest Falhou - plugin não funcional");
            });
        });
    }

    Desconectar(db) {
        if (db) {
            console.log("Fechando Banco de Dados");
            db.close().then(status => {
                console.log("Banco de dados Desconectado!!");
            }).catch(error => {
                this.errorCB(error);
            });
        } else {
            console.log("A conexão com o banco não está aberta");
        }
    };
    Listar() {
        return new Promise((resolve) => {
            const listaCadastro = [];
            this.Conectar().then((db) => {
                db.transaction((tx) => {
                    //Query SQL para listar os dados da tabela   
                    tx.executeSql('SELECT * FROM Imobiliaria ', []).then(([tx, results]) => {
                        console.log("Consulta completa");
                        var len = results.rows.length;
                        for (let i = 0; i < len; i++) {
                            let row = results.rows.item(i);
                            const { id, endereco, finalidade, tipo, valor, foto } = row;
                            listaCadastro.push({ id, endereco, finalidade, tipo, valor, foto });
                        }

                        resolve(listaCadastro);
                    });
                }).then((result) => {
                    this.Desconectar(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        });
    }
    Inserir(imovel) {
        return new Promise((resolve) => {
            this.Conectar().then((db) => {
                db.transaction((tx) => {
                    //Query SQL para inserir um novo produto   
                    tx.executeSql('INSERT INTO Imobiliaria(endereco, finalidade, tipo, valor, foto) VALUES (?, ?, ?, ?, ?)', [imovel.endereco, imovel.finalidade, imovel.tipo, imovel.valor, imovel.foto]).then(([tx, results]) => {
                        resolve(results);
                    });
                }).then((result) => {
                    this.Desconectar(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        });
    }
    Atualizar(imovel) {
        return new Promise((resolve) => {
            this.Conectar().then((db) => {
                db.transaction((tx) => {
                    //Query SQL para atualizar um dado no banco        
                    tx.executeSql('UPDATE Imobiliaria SET endereco = ?, finalidade = ?, tipo = ?, valor = ?, foto = ? WHERE id = ?', [imovel.endereco, imovel.finalidade, imovel.tipo, imovel.valor, imovel.foto, imovel.id]).then(([tx, results]) => {
                        resolve(results);
                    });
                }).then((result) => {
                    this.Desconectar(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        });
    }
    Deletar(id) {
        return new Promise((resolve) => {
            this.Conectar().then((db) => {
                db.transaction((tx) => {

                    tx.executeSql('DELETE FROM Imobiliaria WHERE id = ?', [id]).then(([tx, results]) => {
                        console.log(results);
                        resolve(results);
                    });
                }).then((result) => {
                    this.Desconectar(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        });
    }
}