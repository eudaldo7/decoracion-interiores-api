const db = require('../config/dbConfig');

module.exports = {
    getAll: (cb) => db.query('SELECT * FROM detalle_ambiente', cb),
    getById: (id, cb) => db.query('SELECT * FROM detalle_ambiente WHERE id_detalle = ?', [id], cb),
    create: (data, cb) => db.query('INSERT INTO detalle_ambiente SET ?', [data], cb),
    update: (id, data, cb) => db.query('UPDATE detalle_ambiente SET ? WHERE id_detalle = ?', [data, id], cb),
    delete: (id, cb) => db.query('DELETE FROM detalle_ambiente WHERE id_detalle = ?', [id], cb)
};