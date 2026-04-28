const DeepSeaCreatureController = require('../controllers/deepSeaCreatureController'); 
const idValidatorMiddleware = require('../middlewares/idvalidator.middleware'); 

const DeepSeaCreatureRouter = require('express').Router(); 

DeepSeaCreatureRouter.route('/')
.get(DeepSeaCreatureController.getAll); 

DeepSeaCreatureRouter.route('/:id')
.get(idValidatorMiddleware, DeepSeaCreatureController.getById); 

module.exports= DeepSeaCreatureRouter;