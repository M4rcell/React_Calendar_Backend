const  {response} = require('express'); //ayuda al excribir res.json
const {validationResult} = require('express-validator');


const crearUsuario = (req,res=response)=>{

   const {name,email,password} = req.body;
 
   //manejo de Errores
   const error = validationResult(req);
    if (!error.isEmpty()) {
      
        return res.status(400).json({
            ok:false,
            error:error.mapped()
        })
    }

    res.status(201).json({
        ok:true ,
        msg:'Registro',
        name,
        email,
        password,
    });
}

const loginUsuario =(req,res=response)=>{
   
    const {email,password} = req.body;
    
    //manejo de Errores
    const error = validationResult(req);
    console.log(error);
    if (!error.isEmpty()) {
      
        return res.status(400).json({
            ok:false,
            error:error.mapped()
        })
    }
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