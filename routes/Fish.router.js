const fishController = require('../controllers/fishController')
const idValidatorMiddleware = require('../middlewares/idvalidator.middleware');

const fishRouter = require('express').Router();

fishRouter.route('/')
   .get(fishController.getAll);


fishRouter.route('/:id')
   .get(idValidatorMiddleware, fishController.getById);



module.exports = fishRouter; 
