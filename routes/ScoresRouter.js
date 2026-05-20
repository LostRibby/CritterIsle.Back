const scoreController = require('../controllers/score.controller');
const authentificationMiddleware = require('../middlewares/auth/authentificationMiddleware');
const scoreRouter = require('express').Router();

scoreRouter.route('/')
    .get(scoreController.getAll);


scoreRouter.route('/')
    .post(authentificationMiddleware(), scoreController.postScore)

module.exports = scoreRouter