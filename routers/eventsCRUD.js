/*
 Events Routes
 host + /api/events/
*/

const {Router} = require('express'); 
const {check}  = require('express-validator');
const {validarCampos} = require('../middlewares/validar-campos')

// Todas tienes que pasar por la  validacion del JWT
const {validarJWT} = require('../middlewares/validar-jwt')
const {isDate} = require('../helpers/isDate')
//traendo funciones desde el controlador
const {getEventos,crearEvento,actualizarEvento,eliminarEvento} = require('../controllers/eventsCRUD')

const router=Router();
// validar todas rutas sean protegidas
router.use(validarJWT); //es ingual a router.get('/',validarJWT,getEventos);

// Obtener eventos
router.get('/',

getEventos);


// crear un nuevo evento
router.post('/',
  [
    check('title','El titulo es obligatorio ').not().isEmpty(),
    check('start','Fecha de inicio es obligatorio').custom(isDate),
    check('end','Fecha de finalizacion es obligatorio').custom(isDate),
    
    validarCampos,
  ],
  crearEvento);

// Actualizar evento
router.put('/:id',actualizarEvento);

// Borrar evento
router.delete('/:id',eliminarEvento);

module.exports=router;