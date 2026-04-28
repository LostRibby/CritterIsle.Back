const { Schema, model, Types } = require('mongoose');

const DSCSchema = Schema({
   season: {
        type : [String],
        required: true,
        trim: true 
    }, 
    speed: {
        type: String, 
        required: true, 
        trim: true
    }, 
    
},{
    collection : 'DeepSeaCreatures', 
    timestamps: true
} 
)
const DeepSeaCreature = model('DeepSeaCreatures', DSCSchema); 
module.exports = DeepSeaCreature 