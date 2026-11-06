const Cliente = require('../models/clienteModel');

exports.getClientes = (req, res) => {
    Cliente.getClientes((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

exports.getClienteById = (req, res) => {
    Cliente.getClienteById(req.params.id, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) {
            return res.status(404).json({ mensaje: 'Cliente no encontrado' });
        }
        res.json(results[0]);
    });
};

exports.postCliente = (req, res) => {
    Cliente.postCliente(req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({
            mensaje: 'Cliente creado correctamente',
            id: result.insertId
        });
    });
};

exports.putCliente = (req, res) => {
    Cliente.putCliente(req.params.id, req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: 'Cliente no encontrado' });
        }
        res.json({ mensaje: 'Cliente actualizado correctamente' });
    });
};

exports.deleteCliente = (req, res) => {
    Cliente.deleteCliente(req.params.id, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: 'Cliente no encontrado' });
        }
        res.json({ mensaje: 'Cliente eliminado correctamente' });
    });
};