module.exports = (Model, nombre) => ({

    getAll: (req, res) => {
        Model.getAll((err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(200).json(results);
        });
    },

    getById: (req, res) => {
        Model.getById(req.params.id, (err, results) => {
            if (err) return res.status(500).json({ error: err.message });

            if (results.length === 0) {
                return res.status(404).json({ mensaje: `${nombre} no encontrado` });
            }

            res.status(200).json(results[0]);
        });
    },

    create: (req, res) => {
        Model.create(req.body, (err, result) => {
            if (err) return res.status(400).json({ error: err.message });

            res.status(201).json({
                mensaje: `${nombre} creado correctamente`,
                id: result.insertId
            });
        });
    },

    update: (req, res) => {
        Model.update(req.params.id, req.body, (err, result) => {
            if (err) return res.status(400).json({ error: err.message });

            if (result.affectedRows === 0) {
                return res.status(404).json({ mensaje: `${nombre} no encontrado` });
            }

            res.json({ mensaje: `${nombre} actualizado correctamente` });
        });
    },

    delete: (req, res) => {
        Model.delete(req.params.id, (err, result) => {
            if (err) return res.status(400).json({ error: err.message });

            if (result.affectedRows === 0) {
                return res.status(404).json({ mensaje: `${nombre} no encontrado` });
            }

            res.json({ mensaje: `${nombre} eliminado correctamente` });
        });
    }
});