const express = require('express');
const conexionDB = require('./config/db.js');

const perroroutes = require('./routes/Perroroutes.js');
const adoptanteroutes = require('./routes/Adoptanteroutes.js');

const app = express();
require('dotenv').config();
app.use(express.json());

conexionDB();

app.use('/api', perroroutes);
app.use('/api', adoptanteroutes);

const port = process.env.PORT ; // Cambia el puerto aquí
app.listen(port ,() => {
    console.log("servidor corriendo");
})
