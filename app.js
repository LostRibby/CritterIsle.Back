const express = require('express');
const server = express(); 

const mongoose = require("mongoose"); 

const { PORT, MONGO_URI } = process.env; 

server.use(express.json()); 
 
const logMiddleware = require("./middlewares/log.middleware")
server.use(logMiddleware())

const cors = require('cors')
// Routes
const router = require('./routes'); 
server.use('/api', router); 

// Connexion DB + démarrage serveur
mongoose.connect(MONGO_URI, { dbName: 'CritterIsle' })
    .then(() => {
        console.log('Connection à la db réussie 😊');

        server.listen(PORT, () => {
            console.log(`Le server Express a démarré au port ${PORT} 🦈`);
        });
    })
    .catch(err => {
        console.log(`❌ Connection ratée \n[Reason]\n ${err}`);
    });