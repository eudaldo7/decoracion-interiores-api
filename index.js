require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('./config/dbConfig');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/clientes', require('./routes/clienteRoutes'));
app.use('/api/estilos', require('./routes/estiloRoutes'));
app.use('/api/categorias', require('./routes/categoriaRoutes'));
app.use('/api/proyectos', require('./routes/proyectoRoutes'));
app.use('/api/ambientes', require('./routes/ambienteRoutes'));
app.use('/api/productos', require('./routes/productoRoutes'));
app.use('/api/detalles', require('./routes/detalleAmbienteRoutes'));

app.get('/', (req, res) => {
    res.json({
        mensaje: 'API Decoración de Interiores funcionando'
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});