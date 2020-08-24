const express = require('express');
require('dotenv').config();

//console.log(process.env);

// crear el servidor de express
const app = express();


// directorio publico html
app.use(express.static('public'));

// Rutas
app.use('/api/auth', require('./routers/auth'));
//TODO: auth  // crerar, login ,new

//TODO: CRUD de eventos



//escuchar peticiones

app.listen(process.env.PORT,()=>{

    console.log(`Servidor corriendo en elv puerto ${process.env.PORT}`);

});