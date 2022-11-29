const mongoose= require('mongoose')
const schema= mongoose.Schema;

const messageSchema= new schema({ 
    sender:{
         type: String,
         required:true,
        }, 
    body:{ 
         type: String,
         required: true
    },
    receiver:{
        type: String,
        required: true,
    }
}
);

module.exports.Message = mongoose.model('Message', messageSchema);
