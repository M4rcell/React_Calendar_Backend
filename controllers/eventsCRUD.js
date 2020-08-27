const  {response} = require('express'); 
const Evento = require('../models/Evento');//traer schema de modelo

const getEventos = async(req,res=response)=>{  

    const eventos = await Evento.find()
                                .populate('user','name');//rellenar el campo usuario con todo sus campos

    try {
        res.status(201).json({
            ok:true ,
            msg:'obtener todo los eventos',
            eventos
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'por favor hable con el adminsitrador'
        })
        
    }
}

const crearEvento =async (req,res=response)=>{  
    //verificar que tenga el evento
     const evento = new Evento(req.body);
     
    try {
        evento.user = req.uid;//add id del user

        const eventoGuardado = await evento.save();
        res.status(201).json({
            ok:true ,
            msg:'se creo nuevo evento',
            evento:eventoGuardado
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