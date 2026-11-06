const db = require('../config/dbConfig');

module.exports = {
    getAll: (cb) => db.query('SELECT * FROM ambientes', cb),
    getById: (id, cb) => db.query('SELECT * FROM ambientes WHERE id_ambiente = ?', [id], cb),
    create: (data, cb) => db.query('INSERT INTO ambientes SET ?', [data], cb),
    update: (id, data, cb) => db.query('UPDATE ambientes SET ? WHERE id_ambiente = ?', [data, id], cb),
    delete: (id, cb) => db.query('DELETE FROM ambientes WHERE id_ambiente = ?', [id], cb)
};