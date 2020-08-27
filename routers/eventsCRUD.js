const {Router} = require('express'); 

// Todas tienes que pasar por la  validacion del JWT

const router=Router();

//traendo funciones desde el controlador
const {getEventos,crearEvento,actualizarEvento,eliminarEvento} = require('../controllers/eventsCRUD')

// Obtener eventos
router.get('/',getEventos);


// crear un nuevo evento
router.post('/',crearEvento);

// Actualizar evento
router.put('/:id',actualizarEvento);

// Borrar evento
router.delete('/:id',eliminarEvento);

module.exports=router;