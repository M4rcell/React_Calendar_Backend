const  {response} = require('express'); 


const getEventos = (req,res=response)=>{  

    try {
        res.status(201).json({
            ok:true ,
            msg:'obtener todo los eventos',
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'por favor hable con el adminsitrador'
        })
        
    }
}

const crearEvento = (req,res=response)=>{  
    //verificar que tenga el evento
     console.log(req.body);
     
    try {
        res.status(201).json({
            ok:true ,
            msg:'crear nuevo evento',
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'por favor hable con el adminsitrador'
        })
        
    }
}

const actualizarEvento = (req,res=response)=>{  

    try {
        res.status(201).json({
            ok:true ,
            msg:'actualizar evento',
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'por favor hable con el adminsitrador'
        })
        
    }
}

const eliminarEvento = (req,res=response)=>{  

    try {
        res.status(201).json({
            ok:true ,
            msg:'eliminar evento',
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'por favor hable con el adminsitrador'
        })
        
    }
}

module.exports={
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento

}