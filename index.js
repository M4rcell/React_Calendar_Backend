const express = require('express');
require('dotenv').config();

//console.log(process.env);

// crear el servidor de express
const app = express();


// directorio publico
app.use(express.static('public'));

// Rutas

app.get('/',(req,res)=>{

    console.log('se requiere /');
    res.json({
        ok:true 
    })
});


//escuchar peticiones

app.listen(process.env.PORT,()=>{

    console.log(`Servidor corriendo en elv puerto ${process.env.PORT}`);

});