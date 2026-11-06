const db = require('../config/dbConfig');

const getClientes = (callback) => {
    db.query('SELECT * FROM clientes', callback);
};

const getClienteById = (id, callback) => {
    db.query(
        'SELECT * FROM clientes WHERE id_cliente = ?',
        [id],
        callback
    );
};

const postCliente = (cliente, callback) => {
    db.query(
        'INSERT INTO clientes SET ?',
        [cliente],
        callback
    );
};

const putCliente = (id, cliente, callback) => {
    db.query(
        'UPDATE clientes SET ? WHERE id_cliente = ?',
        [cliente, id],
        callback
    );
};

const deleteCliente = (id, callback) => {
    db.query(
        'DELETE FROM clientes WHERE id_cliente = ?',
        [id],
        callback
    );
};

module.exports = {
    getClientes,
    getClienteById,
    postCliente,
    putCliente,
    deleteCliente
};