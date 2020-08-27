
const {Schema,model} = require('mongoose');


const EventoSchema = Schema({

    title:{
        type:String,
        required:true
    },
    notes:{
        type:String
    },
    start:{
        type:Date,
        required:true
    },
    end:{
        type:Date,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,//referecia a usuario
        ref:'Usuario',
        required:true
    }
   
});

EventoSchema.method('toJSON',function(){
   const {__v,_id,...object} = this.toObject();//access a todos loavalores de schema
   
   object.id=_id;

   return object;

});

module.exports=model('Evento',EventoSchema);
