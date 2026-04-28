const mongoose = require('mongoose');

const fishSchema = new mongoose.Schema({
    season: {
        type : Array,
        required: true,
        trim: true 
    }, 
    location: {
        type: [String], 
        required: true, 
        trim: true
    }, 
    
},{
    collection : 'Fishes', 
    timestamps: true
} 
);

module.exports = mongoose.model('Fish', fishSchema);