/*
 Rutas de Usuarios / Auth
 host + api/auth/
*/

const {Router} = require('express');
//const router = express.Router;
const {check} = require('express-validator');
const {validarCampos}=require('../middlewares/validar-campos');
const {validarJWT} = require('../middlewares/validar-jwt')

//traendo funciones desde el controlador
const {crearUsuario,loginUsuario,revalidarToken,} = require('../controllers/auth');

const router=Router();

router.post(
    '/new',
    [//middlewares
        check('name','El nombre es obligatorio').not().isEmpty(),//campo de names es obligatio y no debe ser vacio
        check('email','El email es obligatorio').isEmail(),
        check('password','El password debe de ser de 6 caracteres').isLength({min:6}),
        validarCampos,
    ],
    crearUsuario);

router.post(
    '/',
    [
        check('email','El email es obligatorio').isEmail(),
        check('password','El password debe de ser de 6 caracteres').isLength({min:6}),
        validarCampos
    ],
    loginUsuario
    );

router.get('/renew',validarJWT,revalidarToken);


module.exports=router;