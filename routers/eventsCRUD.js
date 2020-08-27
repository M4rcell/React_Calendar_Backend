/*
 Events Routes
 host + /api/events/
*/

const {Router} = require('express'); 
const router=Router();

// Todas tienes que pasar por la  validacion del JWT
const {validarJWT} = require('../middlewares/validar-jwt')

//traendo funciones desde el controlador
const {getEventos,crearEvento,actualizarEvento,eliminarEvento} = require('../controllers/eventsCRUD')

// validar todas rutas sean protegidas
router.use(validarJWT); //es ingual a router.get('/',validarJWT,getEventos);

// Obtener eventos
router.get('/',getEventos);


// crear un nuevo evento
router.post('/',crearEvento);

// Actualizar evento
router.put('/:id',actualizarEvento);

// Borrar evento
router.delete('/:id',eliminarEvento);

module.exports=router;