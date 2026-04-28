const mongoose = require('mongoose');
const fishService = require('../services/fishService');

const fishController = {

  getAll: async (req, res) => {
    try {
      const fishes = await fishService.find(req.query); 

      res.status(200).json({
        success: true,
        count: fishes.length,
        data: fishes
      });

    } catch (err) {
      console.error(err);

      res.status(500).json({
        success: false,
        message: "J'ai raté ton poisson",
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
          message: 'Poisson introuvable'
        });
      }

      res.status(200).json({
        data: fish
      });

    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: 'Erreur lors de la récupération du poisson'
      });
    }
  }

};

module.exports = fishController;