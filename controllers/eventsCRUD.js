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

const actualizarEvento = async(req,res=response)=>{ 
    
    const eventoId = req.params.id;
    const uid = req.uid;

    try {

        const evento = await Evento.findById(eventoId);
        
        if (!evento) {
            res.status(404).json({
                ok:false,
                msg:'evento no existe po ese id'
            });
            
        }

       if (evento.user.toString() !== uid) {//no puede editar eventos de otras personas

           return res.status(401).json({
               ok:false,
               msg :'No tiene privilegio de editar este evento'
           });
           
       }

       const nuevoEvento = {
           ...req.body,
           user:uid
       }

       const eventoActualizado = await Evento.findByIdAndUpdate(eventoId,nuevoEvento,{new:true});//{new:true} => retorna los datos actualizados

       res.json({
           ok:true,
           evento:eventoActualizado
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