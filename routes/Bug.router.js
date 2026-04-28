const bugController = require('../controllers/bugController'); 
const idValidatorMiddleware = require('../middlewares/idvalidator.middleware'); 

const bugRouter = require('express').Router();

bugRouter.route('/')
   .get(bugController.getAll); 

bugRouter.route('/:id')
   .get(idValidatorMiddleware, bugController.getById);


module.exports = bugRouter;