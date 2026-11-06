const db = require('../config/dbConfig');

module.exports = {
    getAll: (cb) => db.query('SELECT * FROM categorias', cb),
    getById: (id, cb) => db.query('SELECT * FROM categorias WHERE id_categoria = ?', [id], cb),
    create: (data, cb) => db.query('INSERT INTO categorias SET ?', [data], cb),
    update: (id, data, cb) => db.query('UPDATE categorias SET ? WHERE id_categoria = ?', [data, id], cb),
    delete: (id, cb) => db.query('DELETE FROM categorias WHERE id_categoria = ?', [id], cb)
};