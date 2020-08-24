/*
 Rutas de Usuarios / Auth
 host + api/auth/
*/

const {Router} = require('express');
//const router = express.Router;
const {check} = require('express-validator');
const router=Router();

//traendo funciones desde el controlador
const {crearUsuario,loginUsuario,revalidarToken,} = require('../controllers/auth');

router.post(
    '/new',
    [//middlewares
        check('name','El nombre es obligatorio').not().isEmpty(),//campo de names es obligatio y no debe ser vacio
        check('email','El email es obligatorio').isEmail(),
        check('password','El password debe de ser de 6 caracteres').isLength({min:6}),
    ],
    crearUsuario);

router.post(
    '/',
    [
        check('email','El email es obligatorio').isEmail(),
        check('password','El password debe de ser de 6 caracteres').isLength({min:6}),
    ],
    loginUsuario
    );

router.get('/renew',revalidarToken);


module.exports=router;