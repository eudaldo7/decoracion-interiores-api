const db = require('../config/dbConfig');

module.exports = {
    getAll: (cb) => db.query('SELECT * FROM estilos', cb),
    getById: (id, cb) => db.query('SELECT * FROM estilos WHERE id_estilo = ?', [id], cb),
    create: (data, cb) => db.query('INSERT INTO estilos SET ?', [data], cb),
    update: (id, data, cb) => db.query('UPDATE estilos SET ? WHERE id_estilo = ?', [data, id], cb),
    delete: (id, cb) => db.query('DELETE FROM estilos WHERE id_estilo = ?', [id], cb)
};