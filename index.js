const {MongoClient} = require('mongodb');
const mongoose= require('mongoose')
const cors= require('cors')
var express = require('express');
var app = express();
var bodyparser= require('body-parser')
require('dotenv').config();
const utilisateurRoutes = require('./routes/utilisateur');

const db='mongodb+srv://urban:3-hDray6XLEHr4!@clusterurbain.weszivf.mongodb.net/mongodb?retryWrites=true&w=majority'

app.use(cors())
app.use(express.json())

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

app.listen(4100, function () {
  console.log("mon backend écoutant sur le port http://localhost:4100");
});

