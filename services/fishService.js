const Fish = require('../models/Fish.model');

const fishService = {
  find: async (query = {}) => {
    try {
      const { location, season } = query;

      const filter = {};

      if (location) {
        filter.location = location.toLowerCase(); 
      }

      if (season) {
        let seasonsArray;

        if (Array.isArray(season)) {
          seasonsArray = season;
        } else if (typeof season === 'string') {
          seasonsArray = season.split(',');
        }

        filter.season = {
          $in: seasonsArray.map(s => s.toLowerCase())
        };
      }

      console.log("FILTER:", filter);

      const fishes = await Fish.find(filter);

      return fishes;

    } catch (err) {
      console.error(err);
      throw err;
    }
  }
};

module.exports = fishService;