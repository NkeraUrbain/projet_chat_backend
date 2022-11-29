const { sendMessage, recupererMessage } = require('../controllers/sendMessage');
const { detailUser, createUser,Login } = require('../controllers/utlisateur');


const router = require('express').Router();

router.get('/details',detailUser);
router.post('/newUser',createUser);
router.post('/envoiMessage', sendMessage);
router.post('/Login', Login);
router.post('/Message', recupererMessage);


module.exports= router