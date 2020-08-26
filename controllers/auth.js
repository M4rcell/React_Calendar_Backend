const  {response} = require('express'); //ayuda al excribir res.json
const bcrypt= require('bcryptjs');
const Usuario = require('../models/Usuario');
const  {generarJWT} = require('../helpers/jwt')
//const {validationResult} = require('express-validator');


const crearUsuario = async(req,res=response)=>{

    const {email,password} = req.body;
    //manejo de Errores
    /*  const error = validationResult(req);
    if (!error.isEmpty()) {
        
        return res.status(400).json({
            ok:false,
            error:error.mapped()
        })
    } */

    try {
        
        let usuario = await Usuario.findOne({email});

        if (usuario) {
            return res.status(400).json({
                ok:false,
                msg:'Un usuario existe con ese correo',
            });
            
        }

        usuario = new Usuario(req.body);

        //Encriptar de contraseña 
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password,salt);
        
        await usuario.save();

        //Generar JWT
        const token  = await generarJWT(usuario.id,usuario.name);
       /// console.log(token);
    
        res.status(201).json({

            ok:true ,
            msg:'el usuario se registro correctamente',
            uid:usuario.id,
            name:usuario.name,
            token
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'por favor hable con el adminsitrador'
        })
        
    }
}

const loginUsuario =async(req,res=response)=>{
   
    const {email,password} = req.body;

    try {
        let usuario = await Usuario.findOne({email});

        if (!usuario) {
            return res.status(400).json({
                ok:false,
                msg:'El usuario no existe con ese email',
            });
            
        }

        const validarPassword = bcrypt.compareSync(password,usuario.password);

        if (!validarPassword) {
            return res.status(400).json({
                ok:false,
                msg:'Password es incorrecto'
            });
            
        }

        //Generar JWT
        const token  = await generarJWT(usuario.id,usuario.name);

        res.status(200).json({
            ok:true,
            uid:usuario.id,
            name:usuario.name,
            token
        })

     } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'por favor hable con el adminsitrador'
        })
        
    }
    
    res.status(201).json({
        ok:true ,
        msg:'login',
        email,
        password,
    })
}  ;

const revalidarToken = async(req,res=response)=>{
    
   // const {uid,name} = req;
    const uid = req.uid;
    const name = req.name;
    
    //generar un nuevo token y retornarlo en esta peticion
    const token  = await generarJWT(uid,name);

    res.json({
        ok:true ,
        token
    })
};

module.exports ={
    crearUsuario,
    loginUsuario,
    revalidarToken,
}