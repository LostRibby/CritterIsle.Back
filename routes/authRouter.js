const authController = require('../controllers/auth.controller')
const authRouter = require('express').Router(); 

authRouter.post('/register', authController.register); 

authRouter.post('/login', authController.login);

authRouter.get('/me', authController.getData);

authRouter.put('/save',authController.saveData); 

module.exports = authRouter;