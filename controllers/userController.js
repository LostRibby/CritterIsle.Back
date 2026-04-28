const userService = require('../services/userService')

const userController = {
    getAll : async(req, res) =>{
        try{
            const query = req.query; 
            const users = await userService.find(query);
            res.status(200).json(users);
        }catch(err){
            console.log(err); 
            res.status(500).json({
                statusCode : 500, 
                message : 'Erreur lors de la récupération des users'
            });

        }
    }
}

module.exports = userController; 