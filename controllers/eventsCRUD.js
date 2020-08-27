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
            msg:'el usuario se registro correctamente',
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