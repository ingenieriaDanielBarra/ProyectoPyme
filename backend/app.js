const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const connectDB = require('./config/dbConfig');
const formContactoRoutes = require('./routes/formContactoRoutes');

const app = express();
//middleware de Morgan para registrar las peticiones HTTP
app.use(morgan('dev'));
// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conectar con la base de datos
connectDB();
// Rutas
app.use('/', formContactoRoutes);

module.exports = app;

