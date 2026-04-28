const userController = require('../controllers/userController');
const authentificationMiddleware = require('../middlewares/auth/authentificationMiddleware');

const userRouter = require('express').Router();

userRouter.route('/')
    .get( authentificationMiddleware(),
          userController.getAll)

module.exports = userRouter;