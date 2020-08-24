const  {response} = require('express'); //ayuda al excribir res.json

const crearUsuario = (req,res=response)=>{

   const {name,email,password} = req.body;
    
   // res => solo se debe utilizar una sola vez como respuesta return
   if (name.length < 5) {
       return res.status(400).json({
        ok:false ,
        msg:'el nombre debe de ser mas de 5 letras',
       });
   }
    res.json({
        ok:true ,
        msg:'Registro',
        name,
        email,
        password,
    });
}

const loginUsuario =(req,res=response)=>{
   
    const {email,password} = req.body;

    res.json({
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