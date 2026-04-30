const fishRouter = require('./Fish.router');
const bugRouter = require('./Bug.router');
const DeepSeaCreatureRouter= require('./DeepSeaCreature.router')
const userRouter = require('./user.router');
const authRouter = require('./authRouter'); 

const router = require('express').Router(); 

router.get('/', (req,res)=>{
    res.send("Bienvenue sur l'api de CritterIsle 🦈", 200); 
}); 

router.use('/Fishes', fishRouter); 

router.use('/Bugs', bugRouter ); 

router.use('/Creatures', DeepSeaCreatureRouter); 

router.use ('/Users', userRouter);

router.use ('/Auth', authRouter); 

module.exports = router; 