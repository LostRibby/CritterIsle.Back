const User = require('../../models/User.model');

//est ce que l'id dans la route est elle la meme que celle de la requete.

const userAuthorizationMiddleware = ()=>{
    return async(req, res, next)=>{
        const userRouterId = req.params.id; 
        console.log('userRouterId' + userRouterId); 

        const userId = req.user.id; 
        console.log('userId'+userId);

     try{
        const tokenUser =await User.findById(userId); 

        if(!tokenUser){
            res.status(404).json({
                statusCode : 404, 
                message : 'Vous n\'existez pas dans la db'
            })
        }else{
            if(tokenUser.role==='Admin'){
                next(); 
            }else if(userId ===userRouterId){
                next(); 
            }else{
                res.status(403).json({
                    statusCode: 403,
                    message : 'vous ne pouvez pas accéder à ces données!'
                })
            }
        }
     }catch(err){
        res.status(500).json({
            statusCode:500, 
            message: 'une est erreur es survenue dans la db'
        })
     }
    }
}
module.exports= userAuthorizationMiddleware;