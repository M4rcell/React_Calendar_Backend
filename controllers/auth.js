const  {response} = require('express'); //ayuda al excribir res.json

const crearUsuario = (req,res=response)=>{

    res.json({
        ok:true ,
        msg:'Registero'
    });
}

const loginUsuario =(req,res=response)=>{

    res.json({
        ok:true ,
        msg:'login'
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