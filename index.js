const http= require("http")
const {Message}=require('./models/message')
const socketIo= require("socket.io")
const {MongoClient} = require('mongodb');
const mongoose= require('mongoose')
const cors= require('cors')
var express = require('express');
var app = express();
var bodyParser= require('body-parser')
require('dotenv').config();
const utilisateurRoutes = require('./routes/utilisateur');


const db='mongodb+srv://urban:3-hDray6XLEHr4!@clusterurbain.weszivf.mongodb.net/mongodb?retryWrites=true&w=majority'

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))


const server= http.createServer(app)

const io= socketIo(server);

io.on("connection",(socket)=>{
  console.log("nouvel utilisateur connecté");
    socket.on('envoi', (data)=>{
      const message= new Message(data);
      message.save()
      .then((res)=>{
          io.emit('publication',  )
      })
    })
  socket.on("deconnexion",()=>{
    console.log("utilisateur déconnecté");
  })
})

const client = new MongoClient(db);
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})



.then(()=>{
  console.log('database connected');
}).catch((error)=>{
  console.log('not connected to database');
})

app.use('/utilisateur',utilisateurRoutes)

server.listen(4100, ()=>
  console.log("mon backend écoutant sur le port http://localhost:4100{4100}"));


