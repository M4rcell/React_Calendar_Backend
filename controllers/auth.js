const  {response} = require('express'); //ayuda al excribir res.json
const Usuario = require('../models/Usuario');
//const {validationResult} = require('express-validator');


const crearUsuario = async(req,res=response)=>{

    //const {name,email,password} = req.body;
    //manejo de Errores
    /*  const error = validationResult(req);
    if (!error.isEmpty()) {
        
        return res.status(400).json({
            ok:false,
            error:error.mapped()
        })
    } */
    try {
        const usuario = new Usuario(req.body);
        
        await usuario.save();
    
        res.status(201).json({
            ok:true ,
            msg:'el usuario seS registro correctamenteS',
            /* name,
            email,
            password, 
            */
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'por favor hable con el adminsitrador'
        })
        
    }
}

const loginUsuario =(req,res=response)=>{
   
    const {email,password} = req.body;
    
    res.status(201).json({
        ok:true ,
        msg:'login',
        email,
        password,
    })
}  ;

const revalidarToken =(req,res=response)=>{

    res.json({
        ok:true ,
        msg:'renew'
    })
};

module.exports ={
    crearUsuario,
    loginUsuario,
    revalidarToken,
}