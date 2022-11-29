const User= require('../models/user.js');
const  crypto =require('crypto')

module.exports.detailUser = (req, res, next)=>{
    User.find({tittle:'urbain'}, (error, data)=>{
        if(error){
            console.log(error);
        } else{
            res.json(data);
        }
  })
}

module.exports.createUser=async(req, res)=>{
    try {
      const{ username, password,email }= req.body

      const psw= passHash(password);
      const user= new User({
        username,email,
        password:psw
      })
      await user.save((err , result) => {
        if (err) {
         console.log(err)
        }
        res.status(201).json({message: 'created', result})
      })
      
    } catch (error) {
     res.status(401).json('error')
    }
    
  }

  const passHash = (psw) => {
    return crypto.createHash('sha512').update(psw).digest('hex');
}
module.exports.Login = async(req, res)=>{
  try {
    console.log(req.body)
    const email= req.body.email
    
    const password= (req.body.password)


    const user= await User.find({email})
    if(user[0]){
     
     const isMatch= user[0].password==password
     if(isMatch){
      res.status(200).json('user exists')
      console.log('user exist')
     }else{
      res.status(400).json('badpassword')
      console.log('bad password')
     }
    }else{
      res.status(404).json('User not found, please register' )
      console.log('user not found')
    }
  } catch (error) {
    console.log(error);
  }
 
}

 

