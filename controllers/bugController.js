mongoose = require('mongoose')
const bugService = require('../services/bugService');

const bugController = {
  getAll : async (req, res)=>{
    try{
    const bugs = await bugService.find(req.query); 

    res.status(200).json({
        succes: true, 
        coun: bugs.length,
        data: bugs
    });
    }catch(err){
        console.error(err);

    res.status(500).json({
        succes:false,
        message:"j'ai raté ton insecte",
        error:err.message
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
  
        const bugs = await bugService.findById(id); 
  
        if (!bugs) {
          return res.status(404).json({
            message: 'Insecte introuvable'
          });
        }
  
        res.status(200).json({
          data: bugs
        });
  
      } catch (err) {
        console.error(err);
        res.status(500).json({
          message: "Erreur lors de la récupération de l'insecte"
        });
      }
    }, 

}
module.exports = bugController;