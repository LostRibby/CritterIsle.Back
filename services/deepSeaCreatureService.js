const DeepSeaCreature = require('../models/DeepSeaCreature.model'); 

const DeepSeaCreatureService = {
find: async (query={})=>{
 try{
    const {speed, season} = query; 

    const filter = {}; 

    if (speed){
        filter.speed = speed.toLowerCase(); 
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

      console.log("FILTER", filter);

      const DeepSeaCreatures = await DeepSeaCreature.find(filter); 

      return DeepSeaCreatures;
 }catch(err){
console.error(err); 
throw err; 
 }

}}
module.exports = DeepSeaCreatureService;