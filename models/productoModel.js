const db = require('../config/dbConfig');

module.exports = {
    getAll: (cb) => db.query('SELECT * FROM productos', cb),
    getById: (id, cb) => db.query('SELECT * FROM productos WHERE id_producto = ?', [id], cb),
    create: (data, cb) => db.query('INSERT INTO productos SET ?', [data], cb),
    update: (id, data, cb) => db.query('UPDATE productos SET ? WHERE id_producto = ?', [data, id], cb),
    delete: (id, cb) => db.query('DELETE FROM productos WHERE id_producto = ?', [id], cb)
};