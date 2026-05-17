const scoreController = require('../controllers/score.controller')
const scoreRouter = require('express').Router();

scoreRouter.route('/')
    .get(scoreController.getAll);


scoreRouter.route('/')
    .post(scoreController.postScore)

module.exports = scoreRouter