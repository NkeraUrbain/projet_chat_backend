const {Message}=require('../models/message')

module.exports.sendMessage=async(req, res)=>{
    
    try{
      const message= new Message(req.body)
    await message.save()
    .then(()=>{
        res.json({message: 'enrégistrement réussi'})
    })
    }
    catch(error){
      res.status(400).json({message:error.message, stack: error.stack})
    }  
}
module.exports.recupererMessage=async(req, res)=>{
    
  try{
    const reponse = await Message.find({sender:req.body.username}).exec()
     res.status(200).json({data:reponse})
     }
  catch(error){
    res.status(400).json({message:error.message, stack: error.stack})
  }  
}
