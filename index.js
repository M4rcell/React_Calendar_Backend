const express = require('express');
require('dotenv').config();
const cors = require('cors');

const {dbConnection} = require('./database/config');
 
//console.log(process.env);

// crear el servidor de express
const app = express();

//Base de Datos
dbConnection();

//CORS permiter solo los dominios se conecten
app.use(cors())
// directorio publico html
app.use(express.static('public'));

//midelware lectura y parseo de body
app.use(express.json());


// Rutas
//TODO: auth  // new, login ,renew
app.use('/api/auth', require('./routers/auth'));

//TODO: CRUD de eventos
app.use('/api/events', require('./routers/eventsCRUD'));



//escuchar peticiones

app.listen(process.env.PORT,()=>{

    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);

});