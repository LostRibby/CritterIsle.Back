const mongoose = require('mongoose'); 
const DeepSeaCreatureService = require('../services/deepSeaCreatureService');

const DeepSeaCreatureController ={
    getAll: async(req,res) =>{
        try{
          const DeepSeaCreatures = await DeepSeaCreatureService.find(req.query); 

          res.status(200).json({
            success: true,
            count: DeepSeaCreatures.length,
            data:DeepSeaCreatures
          });
        }catch(err){
            console.error(err); 

            res.status(500).json({
                success: false,
                message: "oups, j'ai raté ta créature marine",
                error: err.message
            });
        }
    },

      getById: async (req, res) => {
        try {
          const id = req.params.id;
    
          if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
              message: 'ID invalide'
            });
          }
    
          const fish = await fishService.findById(id); 
    
          if (!fish) {
            return res.status(404).json({
              message: 'créature marine introuvable'
            });
          }
    
          res.status(200).json({
            data: fish
          });
    
        } catch (err) {
          console.error(err);
          res.status(500).json({
            message: 'Erreur lors de la récupération de la créature marine'
          });
        }
      }
}
module.exports = DeepSeaCreatureController;