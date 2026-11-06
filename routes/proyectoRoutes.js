const express = require('express');
const router = express.Router();
const Model = require('../models/proyectoModel');
const controller = require('../controllers/crudController')(Model, 'Proyecto');

router.get('/getAll', controller.getAll);
router.get('/getById/:id', controller.getById);
router.post('/create', controller.create);
router.put('/update/:id', controller.update);
router.delete('/delete/:id', controller.delete);

module.exports = router;