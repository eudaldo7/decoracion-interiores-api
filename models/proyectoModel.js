const db = require('../config/dbConfig');

module.exports = {
    getAll: (cb) => db.query('SELECT * FROM proyectos', cb),
    getById: (id, cb) => db.query('SELECT * FROM proyectos WHERE id_proyecto = ?', [id], cb),
    create: (data, cb) => db.query('INSERT INTO proyectos SET ?', [data], cb),
    update: (id, data, cb) => db.query('UPDATE proyectos SET ? WHERE id_proyecto = ?', [data, id], cb),
    delete: (id, cb) => db.query('DELETE FROM proyectos WHERE id_proyecto = ?', [id], cb)
};